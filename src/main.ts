// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import app from './app.vue';
import router from './router/router';
import validateform from './directives/validateform';
import RxEvent from './directives/rx-event';
import VeeValidate from "vee-validate";
import VModal from "vue-js-modal";
import Plugins from './plugins/secondary-popup';
Vue.use(validateform);
Vue.use(RxEvent);
Vue.use(VeeValidate);
Vue.use(VModal);
Vue.use(Plugins);
Vue.config.productionTip = false;
/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
});


