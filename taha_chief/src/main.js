/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
import "popper.js";
import "./assets/app.scss";
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import VuikitTheme from '@vuikit/theme';

Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.use(VuikitTheme);


Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
