import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/Login.vue'
import Home from '../component/Home.vue'
import Factory1 from '../component/factory/Factory1.vue'
import Factory2 from '../component/factory/Factory2.vue'
import Factory3 from '../component/factory/Factory3.vue'
import Factory4 from '../component/factory/Factory4.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/factory1', component: Factory1 },
  { path: '/factory2', component: Factory2 },
  { path: '/factory3', component: Factory3 },
  { path: '/factory4', component: Factory4 }
]

const router = new VueRouter({
  routes
})

export default router
