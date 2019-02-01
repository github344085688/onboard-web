import WiseVue from "../../../shared/wise-vue";
import { Component, Prop } from "vue-property-decorator";
import template from "./sidebar-menu.vue";
import * as Velocity from 'velocity-animate';
import { forEach } from 'lodash-es';
import session from '../../../shared/session';
import userService from '../../../services/user-service';
@Component({
    mixins: [template],
    name: 'sidebar-menu',
})
export default class SidebarMenu extends WiseVue {
    @Prop({ default: [] })
    menuData!: Array<any>;
    @Prop({ default: '' })
    itemTitle!: string;

    currentRouterName: any;
    PrivateItemTitle: any;
    setMenuData(title: string) {
        this.menuData.forEach(menu => {
            if (menu.title !== title) {
                menu.display = "none";
            }
            this.resuriseSetDisplay(menu, title);
        });
    }

    resuriseSetDisplay(menu: any, title: string) {
        forEach(menu.subMenu, element => {
            if (element.title !== title) {
                element.display = "none";
                if (this.currentRouterName === element.routerName) {
                    element.display = "block";
                }

                if (element.subMenu) {
                    this.resuriseSetDisplay(element, title);
                }
            }
        });
    }

    clickLi(menuItem: any) {
        this.currentRouterName = this.$route.name;
        this.setMenuData(menuItem.title);
        if (menuItem.display === "block") {
            menuItem.display = "none";
        } else {
            menuItem.display = "block";
        }
        if (!this.itemTitle) {
            this.PrivateItemTitle = menuItem.title;
        } else {
            if (this.itemTitle === menuItem.title && !menuItem.subMenu) {
                menuItem.display = "block";
            }
        }
        if (menuItem.routerName) {
            this.PrivateItemTitle = menuItem.title;
            if (menuItem.routerName === 'Login') {
                this.signOut();
            } else {
                this.$router.replace({ name: menuItem.routerName });
            }

        }
    }

    signOut() {
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

  mounted() {
    this.PrivateItemTitle = this.itemTitle;
  }

    judgeIsShowYellowTip(menuItem: any) {
        let isShowYellowTip = (menuItem.display === 'block' && menuItem.state && (menuItem.state.indexOf('.') === -1));
        return isShowYellowTip;
    }

    changeMenu() {
        this.$emit('change', {});
    }

    beforeEnter(el: any) {

    }

    enter(el: any, done: any) {
        Velocity.animate(el, "slideDown", { duration: 200 });
        done();
    }

    leave(el: any, done: any) {
        Velocity.animate(el, "slideUp", { duration: 200 });
    }


}
