import { createWebHashHistory, createRouter } from 'vue-router'
import layout from '../components/layout/index.vue'
import login from '../views/login/index.vue'
import page404 from '../views/404/index.vue'
import Bottom from '../components/layout/bottom.vue'
import Bottom2 from '../components/layout/bottom2.vue'
const routes = [
    //一级路由
    {
      path: '/',
      component: layout,
      children:[
        {
            path:'/bottom',
            component:Bottom
            
        },{
            path:'/bottom2',
            component:Bottom2
        }
      ],
      
    },
    {
        path:'/login',
        component:login,
    },
    {
        path:'/404',
        component:page404
    }
  ]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router