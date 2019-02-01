import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tlp from "./tags-input.vue";
import UnderLine from "../../common/under-line/under-line";
@Component({
  name: "TagsInput",
  mixins: [tlp],
  components: {
    UnderLine
  }
})

export default class TagsInput extends WiseVue {
  @Prop({
    default: ''
  })
  name!: string;

  @Prop({
    default: null
  })
  fill!: any;

  @Prop({
    default: ''
  })
  placeholder!: string;

  @Prop({
    default: []
  })
  tagDatas!: Array<any>;

  transitionTagDatas: Array<any> = [];
  transitionPlaceholder: String = '';

  @Watch("transitionTagDatas")
  transitionTag() {
    if (this.transitionTagDatas.length == 0) this.transitionPlaceholder = this.placeholder;
    else this.transitionPlaceholder = '';
  }

  isFocused: boolean = false;
  value: any = null;
  mounted() {
    if (this.tagDatas.length > 0) {
      this.transitionTagDatas = this.tagDatas;
    } else this.transitionPlaceholder = this.placeholder;
  }
  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
    if (this.fill && this.value) {
      this.value = `${this.fill}${this.value}`;
      let index = this.transitionTagDatas.indexOf(this.value);
      if (index < 0) this.transitionTagDatas.push(this.value);
    } else if (this.value) {
      let index = this.transitionTagDatas.indexOf(this.value);
      if (index < 0) this.transitionTagDatas.push(this.value);
    }
    this.value = '';
    this.$emit('update:input', this.transitionTagDatas);
  }

  onRemoveItem(item: any) {
    this.transitionTagDatas.splice(this.transitionTagDatas.indexOf(item), 1);
    this.$emit('update:input', this.transitionTagDatas);
  }

}
