import Vue from "vue";
import { Component, Prop, Provide, Watch } from "vue-property-decorator";
import template from "./app-header.vue";
import session from '../../shared/session';
import userService from '../../services/user-service';

@Component({
  mixins: [template],
  components: {}
})
export default class AppHeader extends Vue {
  userName: string = '';
  @Prop({ default: false })
  isBlur!: boolean;

  @Prop({ default: false })
  showOrHideSideBar!: boolean;

  switchSideBarMenu(vaule: any) {
    this.$emit("sideBarMenuData", vaule);
    if (vaule == 'warehousing') this.$router.replace({ name: 'Status' });
    if (vaule == 'transportation') this.$router.replace({ name: 'ShipmentActivity' });
  }

  loginOut() {
    userService.logout(session.getUserToken()).subscribe(
      res => {
        session.clean();
        this.$router.replace({ name: 'Login' });
      },
      err => {
        session.clean();
        this.$router.replace({ name: 'Login' });
        alert(err);
      }
    );
  }

  async mounted() {
    let userNames = await session.fetchUserInfo();
    this.userName = userNames.firstName.slice(0, 2);
  }

}
