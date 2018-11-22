import Vue from 'vue'
import Vuex from 'vuex'
import { API_KEY, authInstance as authentication, databaseInstance as database } from './http/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // состояние аутентификации
        isAuthenticated: false,
        // данные о пользователе, чтобы получить их один раз при входе/регистрации и больше не делать запросы 
        user: {
            id: null,
            email: null,
            name: null,
            surname: null,
            age: null,
            gender: null,
            accessToken: null,
        }
    },
    getters: {
        getUserData: (state) => {
            return {
                email: state.user.email,
                name: state.user.name,
                surname: state.user.surname,
                age: state.user.age,
                gender: state.user.gender
            }
        },
        authState: (state) => {
            return state.user.id !== null;
        }
    },
    mutations: {
        // объявление пользователя при входе/регистрации
        setUser(state, user) {
            state.user = user;
        },
        // сброс пользователя
        clearUser (state) {
            state.user = {
                id: null,
                email: null,
                name: null,
                surname: null,
                age: null,
                gender: null,
                accessToken: null,
            }
        }
    },
    actions: {
        // выход из профиля
        logout ({ commit }) {
            commit('clearUser');
        },
        // таймер автоматического выхода
        setLogoutTimer ({ dispatch }, sessionTime) {
            setTimeout(() => { dispatch('logout'); }, sessionTime * 1000);
        },
        signUp ({ commit, dispatch }, userData) {
            // регистрация нового пользователя
            return new Promise ((resolve, reject) => { 
                authentication.post('signupNewUser?key=' + API_KEY, { email: userData.email, password: userData.password, returnSecureToken: true })
                .then((response) => {
                    // создание объекта пользователя для отправки
                    const user = {
                        id: response.data.localId,
                        email: userData.email,
                        name: userData.name,
                        surname: userData.surname,
                        age: userData.age,
                        gender: userData.gender
                    };
                    // добавление данных пользователя в базу данных с использованием уникального id, полученного при регистрации
                    database.patch('users/' + user.id + '.json' + '?auth=' + response.data.idToken, user)
                        .then(() => {
                            user.accessToken = response.data.idToken;
                            // вызов мутации для объявления пользователя
                            dispatch('setLogoutTimer', response.data.expiresIn);
                            commit('setUser', user);
                            resolve();
                        })
                        .catch(() => {
                            reject();
                        });

                }).catch((error) => {
                    reject();
                });
            })
        },

        signIn ({ commit, dispatch }, { email, password }) {
            // авторизация пользователя по логину и паролю
            return new Promise ((resolve, reject) => {
                authentication.post('verifyPassword?key=' + API_KEY, { email, password, returnSecureToken: true })
                .then((response) => {
                    const user = {
                        id: response.data.localId,
                        email: response.data.email,
                        accessToken: response.data.idToken
                    };
                    // получение данных пользователя из базы данных
                    database.get('users/' + user.id + '.json' + '?auth=' + user.accessToken)
                        .then(() => {
                            user.name = res.data.name;
                            user.surname = res.data.surname;
                            user.age = res.data.age;
                            user.gender = res.data.gender;

                            // вызов мутации для объявления пользователя
                            commit('setUser', user);
                            // установка таймера автовыхода                 
                            dispatch('setLogoutTimer', response.data.expiresIn);
                            resolve();
                        }).catch(() => {
                            reject();
                        });

                }).catch(() => {
                    reject();
                });
            })
        },

    }
})
