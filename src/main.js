// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import Header from './components/Header';
import IndexLogo from './components/IndexLogo';
import Features from './components/Features';
import IndexContent from './components/IndexContent';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

Vue.component('app-header', Header);
Vue.component('app-index-logo', IndexLogo);
Vue.component('app-features', Features);
Vue.component('app-index-content', IndexContent);
Vue.component('app-footer', Footer);
Vue.component('app-gallery', Gallery);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
