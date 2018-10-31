import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Login from '@/components/login'
import Bgindex from '@/components/bgindex.vue'
import Menu1 from '@/components/menu1'
import Menu2 from '@/components/menu2'
import Menu3 from '@/components/menu3'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home',component: home},
    {path:"/login",name:"login",component:Login },
    {path:"/bg", redirect:'/menu1',name:"bgindex",component:Bgindex,
      children:[
        {path:'/menu1',name:"menu1",component:Menu1},
        {path:'/menu2',name:"menu2",component:Menu2},
        {path:'/menu3',name:"menu3",component:Menu3}
      ]
    },
    
  ]
})
