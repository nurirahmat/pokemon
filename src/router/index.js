//import vue router
import {createRouter,createWebHistory} from 'vue-router'

//define routes
const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import('@/views/Index.vue')
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:()=>import('@/views/Detail.vue')
    }
]

//create router
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router