<template>
    <main class="main-content">
        <div class="form">
            <h3 class="main-title">Вход</h3>
            <div class="dividing-line"></div>
            <!-- Электронная почта с валидацией и автофокусом-->
            <div class="form-group form-group__login">
                <label for="email-input" class="title">Электронная почта</label>
                <input 
                        class="text-input" 
                        :class="{ invalid: !$v.email.email || (!$v.email.required && $v.email.$dirty) }"
                        id="email-input" 
                        type="text" 
                        placeholder="email@email.com"
                        v-model.trim="$v.email.$model"
                        v-focus>
                <div class="message error-message" v-if="!$v.email.email">Почта введена неправильно.</div>
                <div class="message error-message" v-if="!$v.email.required && $v.email.$dirty">Обязательное поле.</div>
            </div>
            <!-- Пароль -->
            <div class="form-group">
                <label for="pasword-input" class="title">Пароль</label>
                <input 
                        class="text-input" 
                        :class="{ invalid: (!$v.password.minLength && password.length > 0) || (!$v.password.required && $v.password.$dirty) }"
                        id="password-input"
                        type="password" 
                        placeholder="Введите пароль"
                        v-model.trim="$v.password.$model">
                <div class="message error-message" v-if="!$v.password.minLength && password.length > 0">Пароль должен содержать не менее 6 символов.</div>
                <div class="message error-message" v-if="!$v.password.required && $v.password.$dirty">Обязательное поле.</div>
            </div>
            <!-- Кнопка меняет свой текст и цвет в зависимости от состояния запроса. На 3 секунды после успешной регистрации или ошибки кнопка неактивна -->
            <button 
                class="submit-button"
                :class="{
                    submitted: requestState.submitted,
                    error: requestState.error
                }" 
                :disabled="$v.$invalid || requestState.inProgress || requestState.submitted || requestState.error" 
                @click.prevent="login">
                    <span>{{ buttonText }}</span>
            </button>
        </div>
    </main>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import focus from '../../directives/focus.js'
    import { email, required, minLength } from 'vuelidate/lib/validators';

    export default {
        name: 'signIp',
        mixins: [validationMixin],
        directives: { focus },
        data() {
            return {
                email: '',
                password: '',
                requestState: {
                    inProgress: false,
                    submitted: false,
                    error: false
                }
            };
        },
        // вычисляет текст кнопки по состоянию запроса
        computed: {
            buttonText () {
                if (this.requestState.inProgress) {
                    return 'Отправка...';
                } if (this.requestState.submitted) {
                    return 'Готово';
                } if (this.requestState.error) {
                    return 'Произошла ошибка';
                } else {
                    return 'Войти';
                }
            }
        },
        // валидация с помощью vuelidate
        validations: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(6)
            },
        },
        methods: {
            login () {
                // устанавливаем статус запрова "в процессе"
                this.requestState.inProgress = true;
                this.$store.dispatch('signIn', { email: this.email, password: this.password }).then(() => {
                    // меняем статус запроса
                    this.requestState.inProgress = false;
                    this.requestState.error = true;
                    // перенаправляев в профиль
                    this.$router.push('/profile');
                }).catch(() => {
                    //сбрасываем поля
                    this.email = '';
                    this.password = '';
                    this.$v.$reset();
                    // таймер для сброса состояния ошибки
                    setTimeout(() => { this.requestState.error = false }, 1000);
                });
            }
        }
    };
</script>

<style scoped>
    .form-group__login {
        min-height: 6.6em;
    }

    .form-group__login .title {
        margin-top: 1.5em;
    }
</style>