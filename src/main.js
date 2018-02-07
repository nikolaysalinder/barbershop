// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import Header from './components/Header';
import IndexLogo from './components/home/IndexLogo';
import Features from './components/home/Features';
import IndexContent from './components/home/IndexContent';
import Footer from './components/Footer';
import Gallery from './components/home/Gallery';
import IndexSigning from './components/home/IndexSigning';
import Index from './components/home/Index';
import Price from './components/price/Price';
import ModalLogin from './components/ModalLogin';

Vue.component('app-header', Header);
Vue.component('app-index-logo', IndexLogo);
Vue.component('app-features', Features);
Vue.component('app-index-content', IndexContent);
Vue.component('app-footer', Footer);
Vue.component('app-gallery', Gallery);
Vue.component('app-index-signing', IndexSigning);
Vue.component('app-index', Index);
Vue.component('app-price', Price);
Vue.component('app-modal-login', ModalLogin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
