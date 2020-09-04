import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import About from '../views/About.vue'
import ProductDetails from '../views/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/productdetails',
    name: 'Product Details',
    component: ProductDetails,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
