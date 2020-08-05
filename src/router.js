import Vue from 'vue';
import Router from 'vue-router'
import SingleProduct from './views/SingleProduct'

Vue.use(Router)

const aboutUs = {template: '<div>About Us page coming soon!</div>'}
const reviews = {template: '<div>Reviews page coming soon!</div>'}
const showroom = {template: '<div>Showroom page coming soon!</div>'}
const swatches = {template: '<div>Swatches page coming soon!</div>'}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SingleProduct
    },
    {
      path: '/the-sofa',
      name: 'Single Product',
      component: SingleProduct
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: aboutUs
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: reviews
    },
    {
      path: '/showroom',
      name: 'Showroom',
      component: showroom
    },
    {
      path: '/swatches',
      name: 'Swatches',
      component: swatches
    }
  ]
})
