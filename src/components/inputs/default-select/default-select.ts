import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tlp from "./default-select.vue";
import UnderLine from "../../common/under-line/under-line";
import { differenceWith, isEqual, map } from 'lodash-es';
@Component({
  name: "DefaultSelect",
  mixins: [tlp],
  components: {
    UnderLine
  },
  filters: {
    filtersName(value: any, filterKey: any) {
      if (value[filterKey]) return value[filterKey];
      else return value;
    }
  }
})

export default class DefaultSelect extends WiseVue {

  @Prop({
    default: []
  })
  selectdatas!: Array<any>;

  @Prop({
    default: ''
  })
  placeholder!: string;

  @Prop({
    default: ''
  })
  value!: any;

  @Prop({
    default: ''
  })
  filterKey!: string;

  @Prop({
    default: ''
  })
  syncKey!: string;

  @Prop({
    default: false
  })
  isValidate!: boolean;


  isFocused: boolean = false;
  isSelect: boolean = false;
  isHandleBin: boolean = false;
  transitionValue: string = '';
  transitionIsValidate: boolean = false;

  @Watch('isValidate')
  getValidate(val: any, oldVal: any) {
    if (val) this.transitionIsValidate = true;
    else this.transitionIsValidate = false;
  }

  mounted() {
    if (typeof (this.value) == 'object') this.transitionValue = this.value[this.filterKey];
    else this.transitionValue = this.value;
  }

  handleFocus() {
    this.isFocused = true;
    this.isHandleBin = true;
    this.isSelect = true;
    if (!this.transitionValue && this.isValidate) {
      this.transitionIsValidate = true;
    }
  }

  handleBlur(isValidate: any) {
    this.isSelect = false;
    this.isFocused = false;
    this.isHandleBin = false;
  }

  onItemSelect(item: any) {
    this.isSelect = false;
    this.isFocused = false;
    this.isHandleBin = false;
    if (item[this.filterKey]) this.transitionValue = item[this.filterKey];
    else this.transitionValue = item;
    if (item[this.syncKey]) this.$emit('update:input', item[this.syncKey]);
    else if (item) this.$emit('update:input', item);
  }

  crossSelect() {
    this.transitionValue = '';
    this.$emit('update:input', null);
  }

}
