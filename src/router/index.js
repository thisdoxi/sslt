import { createRouter, createWebHistory } from 'vue-router'

const home= ()=>import('../views/home/home')
const category= ()=>import('../views/category/category')
const cart= ()=>import('../views/cart/cart')
const profile= ()=>import('../views/profile/profile')
const detail= ()=>import('../views/detail/detail')

const routes = [
  {
    path: '',
    redirect:'/home',
  },
  {
    path: '/home',
    component: home,
    meta:{
      tilte:'首页'
    }
  },
  {
    path: '/category',
    component: category,
    meta:{
      tilte:'分类'
    }
  },
  {
    path: '/cart',
    component: cart,
    meta:{
      tilte:'购物车'
    }
  },
  {
    path: '/profile',
    component: profile,
    meta:{
      tilte:'我的'
    }
  },
  {
    path: '/detail/:iid',
    component: detail,
    meta:{
      tilte:'详情'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 导航守卫
router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.tilte
  next()
})
export default router
