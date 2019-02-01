import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Provide } from "vue-property-decorator";
import tlp from "./progress-board.vue";
import ExportsButton from "../../../components/buttons/exports-button/exports-button";
import ProgressLists from "../../../components/common/progress-lists/progress-lists";


@Component({
  mixins: [tlp],
  components: {
    ExportsButton,
    ProgressLists
  }
})
export default class ProgressBoard extends WiseVue {
  isExport: boolean = false;

  mounted() {

  }

  onSelect(select: any) {
    this.isExport = true;
  }

}
