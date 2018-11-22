import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './components/home/Home.vue'
import SignUp from './components/auth/SignUp.vue'
import SignIn from './components/auth/SignIn.vue'
import Profile from './components/profile/Profile.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/profile',
            component: Profile,
            beforeEnter(to, from, next) {
                if (store.getters.authState) {
                    next();
                } else {
                    next('signin')
                }
            }
        },
    ]
})
