import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login}
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