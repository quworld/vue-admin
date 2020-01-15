import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach((to, from, next)=> {
    const auth = sessionStorage.getItem('Authorization');
    if(auth){
        if(to.path === '/login'){
            next('/');
        }else{
            next();
        }
    }else{
        if(to.path === '/login'){
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
