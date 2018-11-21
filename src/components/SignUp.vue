<template>
    <main class="mdl-layout__content">
        <div class="form">
            <h3>Регистрация</h3>
            <div class="deviding-line"></div>
            <!-- уточнение для лучшего понимания -->
            <div class="info-note">Обязательные поля</div> 
            <!-- Электронная почта с директивой автофокуса -->
            <div class="form-group">
                <label for="email-input" class="title">Электронная почта</label>
                <input 
                        class="text-input" 
                        :class="{ invalid: !$v.user.email.email || (!$v.user.email.required && $v.user.email.$dirty) }"
                        id="email-input" 
                        type="text" 
                        placeholder="email@email.com"
                        v-model.trim.lazy="$v.user.email.$model"
                        v-focus>
                <div class="message error-message" v-if="!$v.user.email.email">Почта введена неправильно. Пожалуйста, повторите ввод.</div>
                <div class="message error-message" v-if="!$v.user.email.required && $v.user.email.$dirty">Обязательное поле.</div>
            </div>
            <!-- Пароль -->
            <div class="form-group">
                <label for="pasword-input" class="title">Пароль</label>
                <input 
                        class="text-input" 
                        :class="{ invalid: (!$v.user.password.minLength && user.password.length > 0) || (!$v.user.password.required && $v.user.password.$dirty) }"
                        id="password-input"
                        type="password" 
                        placeholder="Введите пароль"
                        v-model.lazy="$v.user.password.$model">
                <div class="message info-message" :class="{ 'error-message': (!$v.user.password.minLength && user.password.length > 0) }">Пароль должен содержать не менее 6 символов.</div>
                <div class="message error-message" v-if="!$v.user.password.required && $v.user.password.$dirty">Обязательное поле.</div>
            </div>
            <!-- Повторение пароля -->
            <div class="form-group">
                <label for="dynamic-label-input" class="title">Повторите пароль</label>
                <input 
                        class="text-input" 
                        :class="{ invalid: !$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty }"
                        id="dynamic-label-input" 
                        type="password" 
                        placeholder="Повторите пароль"
                        v-model="$v.repeatPassword.$model">
                <div class="message error-message" v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty">Пароль не совпадает. Пожалуйста, повторите ввод.</div>
            </div>
            <!-- Имя -->
            <div class="form-group">
                <label for="name-input" class="title">Имя</label>
                <input 
                        class="text-input"
                        :class="{ invalid: !$v.user.name.required && $v.user.name.$dirty }"
                        id="name-input" 
                        type="text" 
                        placeholder="Иван" 
                        v-model.trim.lazy="$v.user.name.$model">
                <div class="message error-message" v-if="!$v.user.name.required && $v.user.name.$dirty">Обязательное поле.</div>
            </div>
            <!-- Фамилия -->
            <div class="form-group">
                <label for="surname-input" class="title">Фамилия</label>
                <input 
                        class="text-input" 
                        :class="{ invalid: !$v.user.surname.required && $v.user.surname.$dirty }"
                        id="surname-input" 
                        type="text" 
                        placeholder="Иванов" 
                        v-model.trim.lazy="$v.user.surname.$model">
                <div class="message error-message" v-if="!$v.user.surname.required && $v.user.surname.$dirty">Обязательное поле.</div>
            </div>
            <!-- Возраст от 1 года до 122 лет (122 - это рекорд Геннеса) -->
            <div class="form-group">
                <label for="age-input" class="title">Возраст</label>
                <input 
                        class="text-input" 
                        :class="{ 
                            invalid:                                                
                                (!$v.user.age.required && $v.user.age.$dirty) || 
                                (!$v.user.age.minValue && $v.user.age.$dirty) || 
                                (!$v.user.age.required && $v.user.age.$dirty) 
                        }"
                        id="age-input" 
                        type="number" 
                        placeholder="18" 
                        min="1"
                        max="122"
                        v-model.number.lazy="$v.user.age.$model">
                <div class="message error-message" v-if="!$v.user.age.required && $v.user.age.$dirty">Обязательное поле.</div>
                <div class="message error-message" v-if="!$v.user.age.minValue && $v.user.age.$dirty">Вы ввели слишком маленькое значение.</div>
                <div class="message error-message" v-if="!$v.user.age.required && $v.user.age.$dirty">Вы ввели слмшком большое значение.</div>

            </div>
            <!-- Пол -->
            <div class="form-group">
                <div class="title">Пол</div>
                <div class="radio-conteiner">
                    <input id="male-radio" name="gender" type="radio" value="Мужской" v-model="$v.user.gender.$model">
                    <label for="male-radio" class="radio-label">Мужской</label>
                    <input id="female-radio" name="gender" type="radio" value="Женский" v-model="$v.user.gender.$model">
                    <label for="female-radio" class="radio-label">Женский</label>
                </div>
                <div class="message error-message" v-if="!$v.user.gender.required && $v.user.gender.$dirty">Обязательное поле</div>
            </div>
            <!-- Кнопка меняет свой текст и цвет в зависимости от состояния запроса. На 3 секунды после успешной регистрации или ошибки кнопка неактивна -->
            <button 
                class="submit-button"
                :class="{
                    submitted: requestState.submitted,
                    error: requestState.error
                }" 
                :disabled="$v.$invalid || requestState.inProgress || requestState.submitted || requestState.error" 
                @click.prevent="submit">
                <span v-if="requestState.inProgress">Отправка...</span>
                <span v-else-if="requestState.submitted">Готово</span>
                <span v-else-if="requestState.error">Произошла ошибка</span>
                <span v-else>Зарегистрироваться</span>
            </button>
            <p>{{$v}}</p>
        </div>
    </main>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import focus from '../directives/focus.js'
    import { email, required, minLength, sameAs, minValue, maxValue, numeric } from 'vuelidate/lib/validators';

    export default {
        name: 'signUp',
        mixins: [validationMixin],
        directives: { focus },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    name: '',
                    surname: '',
                    age: null,
                    gender: ''
                },
                repeatPassword: '',
                requestState: {
                    inProgress: false,
                    submitted: false,
                    error: false
                }
            };
        },
        // валидация с помощью vuelidate
        validations: {
            repeatPassword: {
                sameAsPassword: sameAs(function () { return this.user.password })
            },
            user: {
                email: {
                    email,
                    required
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                name: { required },
                surname: { required },
                age: {
                    required,
                    minValue: minValue(1),
                    maxValue: maxValue(122)
                },
                gender: { required }
            }
        },
        methods: {
            submit () {
                // устанавливаем статус запрова "в процессе"
                this.requestState.inProgress = true;
                this.$store.dispatch('signUp', this.user).then(() => {
                    // меняем статус запроса
                    this.requestState.inProgress = false;
                    this.requestState.submitted = true;
                    // обнуляем поля
                    this.user = {
                        email: '',
                        password: '',
                        name: '',
                        surname: '',
                        age: null,
                        gender: ''
                    };
                    // таймер для сброса состояния успешного запроса
                    setTimeout(() => { this.requestState.submitted = false }, 3000);
                }).catch(() => {
                    // меняем статус запроса
                    this.requestState.inProgress = false;
                    this.requestState.error = true;                   
                     // таймер для сброса состояния ошибки
                    setTimeout(() => { this.requestState.error = false }, 3000);
                });
            }
        }
    };
</script>


<style scoped>
    .mdl-layout-content {
        display: block;
        margin: 1.5em auto;
        height: 100%;
    }

    .form {
        background-color: #fff;
        min-width: 20em;
        width: 80%;
        max-width: 30em;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        margin-bottom: 4em;
        padding: 1.5em;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    h3 {
        text-align: center;
    }

    .deviding-line {
        width: 100%;
        height: 1px;
        background-color: #757575;
    }

    .info-note {
        font-size: 0.9em;
        line-height: 4em;
        color: #757575;
    }

    .info-note:before {
        content: "*";
        margin-right: 0.3em;
        color: #d50000;
    }

    .form-group {
        margin-bottom: 1.5em;
    }

    .form-group .title {
        display: block;
        margin-bottom: 0.5em;
        font-size: 0.9em;
        font-weight: 600;
    }

    .form-group .title:after {
        content: "*";
        margin-left: 0.3em;
        color: #d50000;
    }

    .text-input {
        outline: none;
        width: 100%;
        line-height: 2.5em;
        padding-left: 0.7em;
        padding-right: 0.7em;
        font-size: 1.1em;
        border: 1px solid #9a9a9a;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .text-input.invalid {
        border-color: #d50000 !important;
    }

    /* Radio Input */
    input[type="radio"] {
        display: none;
    }

    .radio-label {
        display: inline-block;
        padding-left: 0.5em;
        padding-right: 0.5em;
        margin-right: 1em;
        width: 6em;
        line-height: 2.5em;
        text-align: center;
        border: 1px solid #9a9a9a;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .radio-label:hover {
        cursor: pointer;
        border-color: #2196f3;
        color: #2196f3;
    }

    .radio-conteiner input:checked+.radio-label {
        border-color: #2196f3;
        color: #2196f3;
    }

    /* Message */
    .message {
        display: inline-block;
        margin-top: 0.5em;
        font-size: 0.9em;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .info-message {
        color: #757575;
    }

    .error-message {
        color: #d50000 !important;
    }

    /* Submit Button */
    .submit-button {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 100%;
        min-width: 15em;
        line-height: 3em;
        font-size: 1.1em;
        background-color: #fff;
        border: 1px solid #2196f3;
        color: #2196f3;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .submit-button:hover {
        cursor: pointer;
        background-color: #2196f3;
        color: #fff;
    }

    .submit-button:disabled {
        cursor: default;
        background-color: #757575;
        border-color: #757575;
        color: #fff;
    }

    .submit-button.submitted {
        background-color: #4caf50 !important;
        border-color: #4caf50 !important;
    }

    .submit-button.error {
        background-color: #f44336 !important;
        border-color: #f44336 !important;
    }

/* Анимация для изменения текста внутри кнопки */
    .submit-button span {
        -webkit-transition: all 0.1s ease;
        -moz-transition: all 0.1s ease;
        -o-transition: all 0.1s ease;
        transition: all 0.1s ease;
    }
</style>