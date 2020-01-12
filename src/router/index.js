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
        path:'page1',
        name:'page1',
        component:() => import('../views/Page1')
      },
      {
        path:'page2',
        name:'page2',
        component:() => import('../views/Page2')
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
