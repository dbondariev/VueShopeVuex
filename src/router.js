import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './views/ProductsList.vue';
import UserCart from './views/UserCart.vue'
import ShopAdmin from './views/ShopAdmin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
  ]
});

export default router;