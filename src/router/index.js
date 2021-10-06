import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Rireki from '../views/Rireki.vue'
import Detail from '../views/Detail.vue'
import OrderCheck from '../views/OrderCheck.vue'
import Cart from '../views/Cart.vue'
import Finish from '../views/Finish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
{
  path:'/rireki',
  name:'Rireki',
  component: Rireki
},
{
  path:'/detail/:id',
  name:'Detail',
  component: Detail
},
{
path:'/ordercheck',
name:'OrderCheck',
component: OrderCheck
},
{
  path:'/cart',
  name:'Cart',
  component:Cart
},
{
  path:'/finish',
  name:'Finish',
  component:Finish
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
