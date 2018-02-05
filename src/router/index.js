import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/home/Index';
import Price from '@/components/price/Price';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/price',
      name: 'Price',
      component: Price,
    },
  ],
});
