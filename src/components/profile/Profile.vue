<template>
    <main class="main-content">
        <div class="profile-container">
            <h3 class="main-title">Профиль</h3>
            <div class="dividing-line"></div>
            <!-- Поле с именем и фамилией -->
            <div class="form-group form-group__name">
                <div class="title">Фамилия Имя</div>
                <div class="text">{{ user.surname + ' ' }} {{ user.name }}</div>
            </div>
            <!-- Поле с возрастом и полом -->
            <div class="form-group form-group__minor-info">
                <div class="title">Возраст</div>
                <div class="text">{{ user.age }}</div>
                <div class="title title__age">Пол</div>
                <div class="text">{{ user.gender }}</div>
            </div>
            <!-- Поле с email -->
            <div class="form-group form-group__email">
                <div class="title"> Электронная почта</div>
                <div class="text">{{ user.email }}</div>
            </div>
        </div>

    </main>
</template>

<script>
    export default {
        name: 'portfolio',
        computed: {
            user () {
                return this.$store.getters.getUserData;   
            }, 
            isAuthenticated () {
                return this.$store.getters.authState;
            }
        },
        watch: {
            // следим за состоянием авторизации, чтобы, перенаправить на страницу входа, если что
            isAuthenticated (authState) {
                if (!authState) {
                    this.$router.push('/signin');
                }
            }
        }
    }
</script>

<style scoped>
    .profile-container {
        min-width: 20em;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    .profile-container .main-title {
        text-align: center;
        margin-bottom: 0.3em;
    }

    .profile-container .form-group {
        min-width: 20em;
        width: 100%;
        max-width: 40em;
        padding: 1.5em 1em;
        margin-bottom: 1em;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    }

    .profile-container .form-group__name {
        margin-top: 1em;
    }

    .profile-container .form-group .title {
        font-size: 1.1em;
        font-weight: 600;
        margin-bottom: 1em;
    }

    .profile-container .form-group .text {
        font-size: 1.5em;
        word-break: break-all;
    }

    .form-group__minor-info .title__age {
        margin-top: 1em;
    }
</style>