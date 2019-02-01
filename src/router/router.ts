import Vue from 'vue';
import Router from 'vue-router';
import Login from '../modules/login/login';
import DefaultMainLayout from '../components/layout/default-main-layout';
import ProgressBoard from '../modules/wms/progress-board/progress-board';
import UIComponent from '../modules/ui/ui';
import CreateAccount from '../modules/wms/create-account/create-account';
import SetupBilling from '../modules/wms/setup-billing/setup-billing';
import auth from "../shared/auth";

Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Login' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/wms',
      name: 'Wms',
      component: DefaultMainLayout,
      children: [
        {
          path: 'inventory/UIComponent',
          name: 'UIComponent',
          component: UIComponent,
        },
        {
          path: 'inventory/progressBoard',
          name: 'ProgressBoard',
          component: ProgressBoard,
        }, {
          path: 'inventory/CreateAccount',
          name: 'CreateAccount',
          component: CreateAccount,
        }, {
          path: 'inventory/SetupBilling',
          name: 'SetupBilling',
          component: SetupBilling,
        }
      ]
    }

  ]
});


router.beforeEach(async (to, from, next) => {

  if (to.name === 'Login') {
    next();
  } else {
    next();
    // if (auth.isSignIn()) {
    //   await auth.initialRequiredUserInfo();
    //   next();
    // } else {
    //   next({ replace: true, name: 'Login' });
    // }
  }

});

export default router;
