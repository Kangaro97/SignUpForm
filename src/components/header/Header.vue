<template>
    <header class="header">
        <div class="header__title">
            <!-- Logo -->
            <router-link class="logo" to="/"></router-link>
            <!-- Title -->
            <div class="title">Тестовое задание</div>
        </div>
        <div class="header__menu">
            <!-- Для неавторизованного пользователя -->
            <nav class="navigation" v-if="!auth">
                <router-link class="navigation__link" to="signin">Войти</router-link>
                <div class="vertical-line"></div>
                <router-link class="navigation__link" to="signup">Зарегистрироваться</router-link>
            </nav>
            <!-- Для авторизованного пользователя -->
            <nav class="navigation" v-else>
                <router-link class="navigation__link" to="profile">Профиль</router-link>
                <div class="vertical-line"></div>
                <a class="navigation__link" @click="logout">Выйти</a>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        computed: {
            auth () {
                return this.$store.getters.authState;
            }
        },
        methods: {
            logout () {
                this.$store.dispatch('logout');
            }
        }
    };
</script>

<style scoped>
    .header {
        height: 7.5em;
        padding: 1em;
        background-color: #2196f3;
    }

    .header__title {
        display: inline-block;
        line-height: 2em;
        font-size: 1.5em;
    }

    .header__title .logo {
        display: inline-block;
        width: 2em;
        height: 2em;
        margin-right: 0.5em;
        vertical-align: middle;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MTQuMDA3LDE0OC43NWM1LjUyMiwwLDEwLTQuNDc3LDEwLTEwVjMwYzAtMTYuNTQyLTEzLjQ1OC0zMC0zMC0zMGgtMzY0Yy0xNi41NDIsMC0zMCwxMy40NTgtMzAsMzB2NDUyICAgIGMwLDE2LjU0MiwxMy40NTgsMzAsMzAsMzBoMzY0YzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMHYtNzMuNjcyYzAtNS41MjMtNC40NzgtMTAtMTAtMTBjLTUuNTIyLDAtMTAsNC40NzctMTAsMTBWNDgyICAgIGMwLDUuNTE0LTQuNDg2LDEwLTEwLDEwaC0zNjRjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBWMzBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGgzNjRjNS41MTQsMCwxMCw0LjQ4NiwxMCwxMHYxMDguNzUgICAgQzQwNC4wMDcsMTQ0LjI3Myw0MDguNDg1LDE0OC43NSw0MTQuMDA3LDE0OC43NXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTIuMDA3LDU0Yy01MC43MjksMC05Miw0MS4yNzEtOTIsOTJjMCwyNi4zMTcsMTEuMTEsNTAuMDg1LDI4Ljg4Miw2Ni44NjljMC4zMzMsMC4zNTYsMC42ODcsMC42OTMsMS4wNzQsMSAgICBjMTYuMzcxLDE0Ljk3OSwzOC4xNTgsMjQuMTMsNjIuMDQzLDI0LjEzYzIzLjg4NSwwLDQ1LjY3Mi05LjE1Miw2Mi4wNDMtMjQuMTNjMC4zODctMC4zMDcsMC43NDEtMC42NDUsMS4wNzQtMSAgICBjMTcuNzc0LTE2Ljc4NCwyOC44ODQtNDAuNTUyLDI4Ljg4NC02Ni44NjlDMzA0LjAwNyw5NS4yNzEsMjYyLjczNiw1NCwyMTIuMDA3LDU0eiBNMjEyLjAwNywyMTggICAgYy0xNi4zMjksMC0zMS4zOTktNS40NzItNDMuNDkxLTE0LjY2OGM4Ljc4OS0xNS41ODUsMjUuMTktMjUuMzMyLDQzLjQ5MS0yNS4zMzJjMTguMzAxLDAsMzQuNzAyLDkuNzQ3LDQzLjQ5MSwyNS4zMzIgICAgQzI0My40MDUsMjEyLjUyOCwyMjguMzM2LDIxOCwyMTIuMDA3LDIxOHogTTE5Ni4wMDcsMTQydi02LjVjMC04LjgyMiw3LjE3OC0xNiwxNi0xNnMxNiw3LjE3OCwxNiwxNnY2LjVjMCw4LjgyMi03LjE3OCwxNi0xNiwxNiAgICBTMTk2LjAwNywxNTAuODIyLDE5Ni4wMDcsMTQyeiBNMjY5Ljk0NywxODguNjgzYy03LjM3NS0xMC45MzgtMTcuNTk2LTE5LjQ0NS0yOS40NjMtMjQuNjk3YzQuNzEtNi4wODcsNy41MjMtMTMuNzEyLDcuNTIzLTIxLjk4NiAgICB2LTYuNWMwLTE5Ljg1MS0xNi4xNDktMzYtMzYtMzZzLTM2LDE2LjE0OS0zNiwzNnY2LjVjMCw4LjI3NCwyLjgxMywxNS44OTksNy41MjMsMjEuOTg2ICAgIGMtMTEuODY3LDUuMjUyLTIyLjA4OCwxMy43NTktMjkuNDYzLDI0LjY5N2MtOC44MjktMTEuOTUzLTE0LjA2LTI2LjcxNi0xNC4wNi00Mi42ODNjMC0zOS43MDEsMzIuMjk5LTcyLDcyLTcyczcyLDMyLjI5OSw3Miw3MiAgICBDMjg0LjAwNywxNjEuOTY3LDI3OC43NzYsMTc2LjczLDI2OS45NDcsMTg4LjY4M3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNjYuMDA3LDQzOGgtNTRjLTUuNTIyLDAtMTAsNC40NzctMTAsMTBzNC40NzgsMTAsMTAsMTBoNTRjNS41MjIsMCwxMC00LjQ3NywxMC0xMFMyNzEuNTI5LDQzOCwyNjYuMDA3LDQzOHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNjYuMDA3LDM4MmgtMTQyYy01LjUyMiwwLTEwLDQuNDc3LTEwLDEwczQuNDc4LDEwLDEwLDEwaDE0MmM1LjUyMiwwLDEwLTQuNDc3LDEwLTEwUzI3MS41MjksMzgyLDI2Ni4wMDcsMzgyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI2Ni4wMDcsMzI2aC0xNDJjLTUuNTIyLDAtMTAsNC40NzctMTAsMTBzNC40NzgsMTAsMTAsMTBoMTQyYzUuNTIyLDAsMTAtNC40NzcsMTAtMTBTMjcxLjUyOSwzMjYsMjY2LjAwNywzMjZ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNODguMzY2LDI3Mi45M2MtMS44NTktMS44Ni00LjQzOS0yLjkzLTcuMDc5LTIuOTNjLTIuNjMxLDAtNS4yMTEsMS4wNy03LjA3LDIuOTNjLTEuODYsMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA3ICAgIHMxLjA2OSw1LjIxLDIuOTMsNy4wN2MxLjg3LDEuODYsNC40MzksMi45Myw3LjA3LDIuOTNjMi42NCwwLDUuMjEtMS4wNyw3LjA3OS0yLjkzYzEuODYtMS44NiwyLjkzMS00LjQ0LDIuOTMxLTcuMDcgICAgUzkwLjIyNywyNzQuNzksODguMzY2LDI3Mi45M3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik04OC4zNjYsMzI4LjkzYy0xLjg2OS0xLjg2LTQuNDM5LTIuOTMtNy4wNzktMi45M2MtMi42MzEsMC01LjIsMS4wNy03LjA3LDIuOTNjLTEuODYsMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA3ICAgIHMxLjA2OSw1LjIxLDIuOTMsNy4wN2MxLjg3LDEuODYsNC40MzksMi45Myw3LjA3LDIuOTNjMi42NCwwLDUuMjEtMS4wNyw3LjA3OS0yLjkzYzEuODYtMS44NiwyLjkzMS00LjQ0LDIuOTMxLTcuMDcgICAgUzkwLjIyNywzMzAuNzksODguMzY2LDMyOC45M3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik04OC4zNjYsMzg0LjkzYy0xLjg2OS0xLjg2LTQuNDM5LTIuOTMtNy4wNzktMi45M2MtMi42MzEsMC01LjIsMS4wNy03LjA3LDIuOTNjLTEuODYsMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA3ICAgIHMxLjA2OSw1LjIxLDIuOTMsNy4wN2MxLjg1OSwxLjg2LDQuNDM5LDIuOTMsNy4wNywyLjkzYzIuNjQsMCw1LjIyLTEuMDcsNy4wNzktMi45M2MxLjg2LTEuODYsMi45MzEtNC40NCwyLjkzMS03LjA3ICAgIFM5MC4yMjcsMzg2Ljc5LDg4LjM2NiwzODQuOTN6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjY2LjAwNywyNzBoLTE0MmMtNS41MjIsMC0xMCw0LjQ3Ny0xMCwxMHM0LjQ3OCwxMCwxMCwxMGgxNDJjNS41MjIsMCwxMC00LjQ3NywxMC0xMFMyNzEuNTI5LDI3MCwyNjYuMDA3LDI3MHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OTEuMDAyLDEzMC4zMmMtOS43MTUtNS42MDktMjEuMDMzLTcuMDk5LTMxLjg3MS00LjE5NmMtMTAuODM2LDIuOTA0LTE5Ljg5NCw5Ljg1NC0yNS41MDIsMTkuNTY5TDMwNy43ODcsMzYzLjY1NiAgICBjLTAuNjg5LDEuMTk1LTEuMTI1LDIuNTItMS4yNzgsMy44OTFsLTguODU4LDc5LjM0NGMtMC40NCwzLjk0OCwxLjQ5OCw3Ljc4Myw0LjkzOCw5Ljc3YzEuNTUzLDAuODk2LDMuMjc4LDEuMzQsNC45OTksMS4zNCAgICBjMi4wOTIsMCw0LjE3Ni0wLjY1NSw1LjkzMS0xLjk0OGw2NC4yODQtNDcuMzQ0YzEuMTExLTAuODE4LDIuMDQxLTEuODU3LDIuNzMtMy4wNTJsMTI1Ljg0MS0yMTcuOTYzICAgIEM1MTcuOTU0LDE2Ny42MzgsNTExLjA1OCwxNDEuOSw0OTEuMDAyLDEzMC4zMnogTTMyMC4wNjMsNDI2LjM5NGw0LjYyNi00MS40MzJsMjguOTQyLDE2LjcxTDMyMC4wNjMsNDI2LjM5NHogTTM2OC4yMTMsMzg2Ljk5NiAgICBsLTM4LjEwNS0yMmwxMDAuOTg1LTE3NC45MWwzOC4xMDUsMjJMMzY4LjIxMywzODYuOTk2eiBNNDg5LjA1NCwxNzcuNjkzbC05Ljg1NywxNy4wNzNsLTM4LjEwNS0yMmw5Ljg1Ny0xNy4wNzMgICAgYzIuOTM4LTUuMDg5LDcuNjgyLTguNzI5LDEzLjM1OC0xMC4yNWM1LjY3OC0xLjUyMiwxMS42MDYtMC43NCwxNi42OTQsMi4xOThjNS4wODksMi45MzgsOC43MjksNy42ODIsMTAuMjUsMTMuMzU4ICAgIEM0OTIuNzcyLDE2Ni42NzUsNDkxLjk5MiwxNzIuNjA0LDQ4OS4wNTQsMTc3LjY5M3oiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
        background-size: cover;
    }

    .header__title .title {
        display: inline-block;
        color: #fff;
        cursor: default;
    }

    .header__menu {
        margin-top: 0.5em;
    }

    .header__menu .navigation {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        align-items: stretch;   
        min-width: 10em;
        width: 50%;
        max-width: 20em;
        height: 2em;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
    }

    .header__menu .navigation__link {
        display: inline-block;
        margin-left: 0.5em;
        margin-right: 0.5em;
        line-height: 2em;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
    }

    .header__menu .vertical-line {
        display: inline-block;
        width: 1px;
        height: 2em;
        background-color: #fff;
    }
</style>