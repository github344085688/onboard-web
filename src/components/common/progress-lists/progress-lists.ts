import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Provide } from "vue-property-decorator";
import tlp from "./progress-lists.vue";
@Component({
  mixins: [tlp],
  components: {}
})
export default class ProgressList extends WiseVue {
  @Prop({ default: '' })
  label!: string;

  @Prop({ default: null })
  listNumber!: number;

  @Prop({ default: false })
  isfinish!: boolean;


  mounted() {

  }

}
