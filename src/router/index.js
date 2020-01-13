import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:'user',
        name:'user',
        component:() => import('../views/User')
      },
      {
        path:'fix',
        name:'fix',
        component:() => import('../views/Fix')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
