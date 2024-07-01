import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import( '../views/tlias/EmpViews.vue')
  },
  {
    path: '/dept',
    name: 'dept',
   
    component: () => import('../views/tlias/DeptViews.vue')
  },
  {
    path: '/',
    redirect: '/emp',
   
  },
]

const router = new VueRouter({
  routes
})

export default router
