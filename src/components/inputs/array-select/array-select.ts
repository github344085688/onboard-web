import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tlp from "./array-select.vue";
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

export default class ArraySelect extends WiseVue {

  @Prop({
    default: []
  })
  selectdatas!: Array<any>;

  @Prop({
    default: ''
  })
  placeholder!: string;

  @Prop({
    default: []
  })
  value!: Array<any>;

  @Prop({
    default: ''
  })
  filterKey!: string;

  @Prop({
    default: ''
  })
  syncKey!: string;

  isFocused: boolean = false;
  isSelect: boolean = false;
  isHandleBin: boolean = false;
  transitionSelects: Array<any> = [];
  transitionSelectdatas: Array<any> = [];

  mounted() {
    this.transitionSelects = this.value;
    this.transitionSelectdatas = differenceWith(this.selectdatas, this.value, isEqual);
  }

  handleFocus() {
    this.isFocused = true;
    this.isHandleBin = true;
    this.isSelect = true;
  }

  handleBlur() {
    this.isSelect = false;
    this.isFocused = false;
    this.isHandleBin = false;
  }

  onItemSelect(item: any) {
    let index = this.transitionSelects.indexOf(item);
    if (index < 0) this.transitionSelects.push(item);
    this.transitionSelectdatas.splice(this.transitionSelectdatas.indexOf(item), 1);
    if (this.transitionSelects.length > 0) {
      if (this.syncKey) {
        this.$emit('update:input', map(this.transitionSelects, this.syncKey));
      }
      else this.$emit('update:input', this.transitionSelects);
    }

    else this.$emit('update:input', null);

  }

  onRemoveItem(item: any) {
    this.isSelect = false;
    this.isFocused = false;
    let index = this.transitionSelectdatas.indexOf(item);
    if (index < 0) this.transitionSelectdatas.push(item);
    this.transitionSelects.splice(this.transitionSelects.indexOf(item), 1);
    if (this.transitionSelects.length > 0) {
      if (this.syncKey) {
        this.$emit('update:input', map(this.transitionSelects, this.syncKey));
      }
      else this.$emit('update:input', this.transitionSelects);
    }
    else this.$emit('update:input', null);
  }
}
