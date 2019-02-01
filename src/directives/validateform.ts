import Vue from 'vue';

const validateform = {
  install: function (vue: any) {
    vue.directive("validateform", funValidateform);
  }
};
const funValidateform = {
  bind(el: any, binding: any, vnode: any) {
    el.addEventListener('submit', (e: any) => {
      e.preventDefault();
    });
  }
};

export default validateform;
