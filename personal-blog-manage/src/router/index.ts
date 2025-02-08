import { createWebHashHistory, createRouter } from 'vue-router'
import layout from '../components/layout/index.vue'
import login from '../views/login/index.vue'
import page404 from '../views/404/index.vue'
import Bottom from '../components/layout/bottom.vue'
import Bottom2 from '../components/layout/bottom2.vue'
import Home from '../views/Home/index.vue'
import LocalFile from '../views/localFile/index.vue'
import Blog from '../views/blog/index.vue'
import Music from '../views/music/index.vue'
import Movie from '../views/movie/index.vue'
import Picture from '../views/picture/index.vue'
import Set from '../views/set/index.vue'
import Note from '../views/note/index.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
const routes = [
    //一级路由
    {
      path: '/',
      component: layout,
      children:[
        {
            path:'/bottom',
            component:Bottom,
            children:[{
              path:'/bottom/home',
              component:Home,
            },{
              path:'/bottom/localFile',
              component:LocalFile
            },{
              path:'/bottom/blog',
              component:Blog
            },{
              path:'/bottom/music',
              component:Music
            },{
              path:'/bottom/picture',
              component:Picture
            },{
              path:'/bottom/movie',
              component:Movie
            },{
              path:'/bottom/note',
              component:Note
            },{
              path:'/bottom/set',
              component:Set
            },
          ]
            
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