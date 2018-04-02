import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import NewPost from './components/NewPost/NewPost'
import NewPostCategory from './components/NewPost/NewPostCategory'
import NewPostContactInfo from './components/NewPost/NewPostContactInfo'
import NotFound from './components/NotFound'
import CurrentLocation from './components/CurrentLocation'
import FeedWall from './components/FeedWall'
import GoldeeTerm from  './components/GoldeeTerm'
import PopUp from './components/PopUp'
import PostDetail from './components/PostDetail'

const routes = [
  { path: '/', component: CurrentLocation },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/login', component: Login},
  { path: '/profile', component: Profile},
  { path: '/newpost', component: NewPost },
  { path: '/currentlocation', component: CurrentLocation },
  { path: '*', component: NotFound },
  { path: '/feedwall', component: FeedWall},
  { path: '/goldeeterm', component: GoldeeTerm},
  { path: '/share', component: PopUp},
  { path: '/postdetail/:postid?', component: PostDetail}
]

const router = new VueRouter({
  routes,
  mode: 'history',
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
