import { Component, Prop } from "vue-property-decorator";
import WiseVue from "../../../shared/wise-vue";
import tlp from './step.vue';
@Component({
  mixins: [tlp]
})
export default class Step extends WiseVue {
  @Prop({
    default: 0
  })
  step!: number;

  @Prop({
    default: false
  })
  isFirst!: boolean;

  @Prop({
    default: 0
  })
  completeSchedule!: number;
  @Prop({
    default: ''
  })
  tests!: string;

  @Prop({
    default: false
  })
  isDoing!: boolean;
}
