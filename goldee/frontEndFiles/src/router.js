import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import FeedWall from './components/FeedWall'
import Post from './components/Post'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login},
  { path: '/profile', component: Profile},
  { path: '/feedwall', component: FeedWall},
  { path: '/post', component: Post }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

export default { router };

import App from './App'

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
