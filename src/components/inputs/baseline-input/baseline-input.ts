import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tlp from "./baseline-input.vue";
import UnderLine from "../../common/under-line/under-line";
@Component({
  name: "BaselineInput",
  mixins: [tlp],
  components: {
    UnderLine
  }
})

export default class BaselineInput extends WiseVue {

  @Prop({
    default: ''
  })
  name!: string;

  @Prop({
    default: ''
  })
  placeholder!: string;

  @Prop({
    default: ''
  })
  value!: string;

  @Prop({
    default: false
  })
  required!: boolean;

  @Prop({
    default: false
  })
  isValidate!: boolean;

  transitionIsValidate: boolean = false;
  isFocused: boolean = false;
  transitionValue: string = '';

  @Watch('isValidate')
  getValidate(val: any, oldVal: any) {
    if (val) this.transitionIsValidate = true;
    else this.transitionIsValidate = false;
  }


  get valErrors(): any {
    if (this.transitionIsValidate ) return  'red';
  }

  mounted() {
    if (this.value) this.transitionValue = this.value;
     this.transitionIsValidate = this.isValidate;
  }

  handleFocus() {
    this.isFocused = true;
  }

  handleInput() {
    this.isFocused = true;
    this.transitionIsValidate = false;

    // this.$emit('update:input', this.transitionValue);
  }

  handleBlur(isValidate: any) {
    this.isFocused = false;
    this.$emit('update:input', this.transitionValue);
  }

}
