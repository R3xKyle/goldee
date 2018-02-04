import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import NewPost from './components/NewPost/NewPost'
import NewPostCategory from './components/NewPost/NewPostCategory'
import NewPostContactInfo from './components/NewPost/NewPostContactInfo'


const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login},
  { path: '/profile', component: Profile},
  { path: '/newpost/post', component: NewPost },
  { path: '/newpost/contact', component: NewPostContactInfo },
  { path: '/newpost', component: NewPostCategory }
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
