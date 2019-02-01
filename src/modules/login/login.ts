import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import WiseVue from "../../shared/wise-vue";
import tlp from "./login.vue";
import userService from "../../services/user-service";
import { Subscription } from 'rxjs/Subscription';
import session from '../../shared/session';
import { map } from 'lodash-es';
// import errorHanlder from '../../shared/error-handler';
import { Subject } from "rxjs/Subject";

import BaselineInput from "../../components/inputs/baseline-input/baseline-input";


@Component({
  mixins: [tlp],
  components: {
    BaselineInput
  }
})
export default class Login extends WiseVue {

  userForm = {isSubmitting: false};
  user = {username: "", password: ""};

  signInSub: Subject<void> = new Subject();


  mounted() {
    this.signInSub.subscribe(
      this.signIn,
      err => {
        // errorHanlder.handle(err);
      }
    );
  }

  private initialUserSession(userLoginedResult: any) {
    session.setUserToken(userLoginedResult.oAuthToken);
    session.setUserId(userLoginedResult.idmUserId);
    session.setUserPermission(map(userLoginedResult.userPermissions, 'name'));
  }

  signIn() {
    this.$validator.validateAll().then(
      res => {
        this.$router.push({name: 'ProgressBoard'});
        // if (res) {
        //   this.userForm.isSubmitting = true;
        //   this.$router.push({name: 'ProgressBoard'});
        //   this.userForm.isSubmitting = true;
        //   this.unsubcribers.push(userService.login(this.user).subscribe(
        //     (res: any) => {
        //       if (res.success) {
        //         this.initialUserSession(res);
        //         this.$router.replace({name: 'ProgressBoard'});
        //       } else {
        //
        //       }
        //     },
        //     err => {
        //       this.userForm.isSubmitting = false;
        //     },
        //     () => {
        //       this.userForm.isSubmitting = false;
        //     }
        //   ));
        // }

      }
    );
  }
}
