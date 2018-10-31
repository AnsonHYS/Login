import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Login from '@/components/login'
import Bgindex from '@/components/bgindex.vue'
import Menu1 from '@/components/menu1'
import Menu2 from '@/components/menu2'
import Menu3 from '@/components/menu3'


Vue.use(Router)

export const menu = [{
  path:"/bg", redirect:'/menu1',name:"bgindex", component:Bgindex,
  children:[
    {path:'/menu1',name:"menu1", meta:{role:"admin"},component:Menu1},
    {path:'/menu2',name:"menu2", meta:{role:"admin"},component:Menu2},
    {path:'/menu3',name:"menu3", meta:{role:"user"},component:Menu3},
  ]
} ]
 
 
 export default new Router({
  routes: [
    {path:"/login",name:"login",component:Login },
    {path: '/', name: 'home',component: home},
  ]  
});
 
