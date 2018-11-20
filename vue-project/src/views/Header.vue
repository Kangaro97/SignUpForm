<template>
    <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Title</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <router-link to="signIn" class="mdl-navigation__link">Войти</router-link>
                <router-link to="signUp" class="mdl-navigation__link">Зарегистрироваться</router-link>
                <button class="mdl-navigation__link">Выйти</button>
            </nav>
        </div>
    </header>
</template>
