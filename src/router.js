import Vue from 'vue';
import Router from 'vue-router'
import SingleProduct from './views/SingleProduct'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: SingleProduct
    },
    {
       path: '/thesofa',
       name: 'singleProduct',
       component: SingleProduct
     }
  ]
})
