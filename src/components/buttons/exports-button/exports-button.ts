import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Provide } from "vue-property-decorator";
import tlp from "./exports-button.vue";
@Component({
  mixins: [tlp]
})
export default class ExportsButton extends WiseVue {

  @Prop({ default: '' })
  value !: string;

  @Prop({ default: false })
  isExport !: boolean;

  @Prop({ default: [] })
  exports !: Array<any>;

  isSearch: boolean = false;

  mounted() {

  }

  onSelectExport(selectExport: any) {
    this.isSearch = false;
    this.$emit('select', selectExport);
  }

  onSearch() {
    this.isSearch = true;
  }

}
