<template>
    <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
            <!-- Title -->
            <router-link class="mdl-layout-title" to="/">Тестовое задание</router-link>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link class="mdl-navigation__link" to="signIn">Войти</router-link>
                <router-link class="mdl-navigation__link" to="signUp">Зарегистрироваться</router-link>
            </nav>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link class="mdl-navigation__link" to="profile">Профиль</router-link>
                <a class="mdl-navigation__link" href="#">Выйти</a>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    @media (max-width: 1024px) {
        .mdl-layout--large-screen-only {
            display: none;
        }
    }


    .mdl-layout__header-row {
        padding-left: 20px;
    }

    .mdl-layout-title {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
</style>