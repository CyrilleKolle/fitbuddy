import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Post from '../views/postEventView.vue'
import Profile from '../views/Profile.vue'
import SignUp from '../views/Registration.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
