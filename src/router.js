import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import Profile from './components/Profile.vue'

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
      component: Profile
    },
  ]
})
