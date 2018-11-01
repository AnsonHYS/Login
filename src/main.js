// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
import {menu} from '@/router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import store from './store/index'
 

Vue.use(ElementUI)
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  
  if(store.getters.role){ //判断role 是否存在
     
    if(store.getters.router.length !== 0){  
        
         next();
    }else{
      let newrouter
      
         if (store.getters.role == 'admin') {  //判断权限
              newrouter = menu
          } else {
            let newchildren = menu[0].children.filter(route => {
              if(route.meta){
                if(route.meta.role == store.getters.role){
                  return true
                  }else
                  return false
              }else{
                  return true
              }
          });
          console.log('menu');
          console.log(menu);
          newrouter = menu;
          newrouter[0].children = newchildren;
          }
          
          console.log(newrouter);
          router.addRoutes(newrouter); //添加动态路由
         
          store.dispatch('Routers',newrouter).then(res => { 
              next({ ...to });
          }).catch(() => {       

          })
    }	  
  }else{
    if (['/login'].indexOf(to.path) !== -1) { 
      next()
   } else {
      next('/login')
   }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
