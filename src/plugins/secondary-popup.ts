import popupForDetermine from '../components/common/secondary-popup-win/secondary-popup-win';
import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $errorAlert: any;
  }
}
const plugins = {
  install: function (vue: any) {
    Vue.prototype.$errorAlert = (options: any) => {
      let instance: any;
      if (!instance) {
        const LoadingPlugin = Vue.extend(popupForDetermine);
        instance = new LoadingPlugin({
          el: document.createElement('div')
        });
        document.body.appendChild(instance.$el);
      }
      instance.show = false;
      Object.assign(instance.options, options);
      return new Promise((resolve, reject) => {
        instance.show = true;
        let successBtn = instance.successBtn;
        let cancelBtn = instance.cancelBtn;
        instance.successBtn = () => {
          successBtn();
          resolve('ok');
        };
        instance.cancelBtn = () => {
          cancelBtn();
          reject();
        };
      });
    };
  },

};

export default plugins;
