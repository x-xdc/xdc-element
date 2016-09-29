import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import configRouter from './route.config';
import Xdc from 'main/index.js';
import 'packages/theme-default/src/index.css';
import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import WapHeader from './components/wap/header-wap.vue';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';
import WapFooterNav from './components/wap/footer-nav-wap';
Vue.use(Xdc);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('wap-header', WapHeader);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);
Vue.component('footer-nav-wap', WapFooterNav);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: configRouter
});

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
