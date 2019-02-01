import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import template from "./account-framework.vue";
import Step from "../../common/step/step";
@Component({
  mixins: [template],
  name: 'AccountFramework',
  components: {
    Step
  }
})
export default class AccountFramework extends WiseVue {
  @Watch('$route', {
    deep: true,
    immediate: true
  })
  getRoute(val: any, oldVal: any) {
    if (val.params.step) {
      console.log(Number(val.params.step));
      let indexDitail = Number(val.params.step);
      this.rootStep = indexDitail;
      this.stepDitail[indexDitail]['isDoing'] = true;
    }
  }

  rootStep: Number = 1;
  stepDitail: Array<any> = [
    {
      isFirst: true,
      completeSchedule: 1,
      title: " <h4>Create Account Provide </h4>information of company and contact details."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: " <h4>Setup Billing </h4>Define how items create an invoice line during a billing process."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: "  <h4>Setup Process Rule </h4> Save a template to customize  different functions for orders."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: " <h4>Setup Order Interface</h4> Choose how orders will be  received and entered."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: " <h4>Data Build (Optional)</h4> Import data spreadsheet files or skip this step."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: " <h4>Data Build (Optional)</h4>Import data spreadsheet files or skip this step."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: "<h4>Data Build (Optional)</h4> Import data spreadsheet files or skip this step."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: "<h4>Data Build (Optional)</h4>  Import data spreadsheet files or skip this step."
    },
    {
       isFirst: false,
      completeSchedule: 0,
      title: "<h4>Data Build (Optional)</h4>  Import data spreadsheet files or skip this step."
    },
    {
      isFirst: false,
      completeSchedule: 0,
      title: "<h4>Data Build (Optional)</h4>  Import data spreadsheet files or skip this step."
    }
  ];

  mounted() {
    if (Number(this.$route.params.step)) this.rootStep = Number(this.$route.params.step);
    else this.rootStep = 0;
    for (let i = 0; i < this.rootStep; i++) {
      // console.log(this.stepDitail[i].completeSchedule);
      this.stepDitail[i].completeSchedule = 2;
    }
    let rootStep = this.rootStep;
    if (this.$route.params.step) {
      this.stepDitail[Number(this.$route.params.step)].completeSchedule = 1;
    }
  }

  onClickStep(Step: any) {
    switch (Step) {
      case 1:
        this.$router.push({name: 'CreateAccount'});
        break;
      case 2:
        this.$router.replace({name: 'SetupBilling', params: { step: '1'}});
        break;
      case 3:
        this.$router.replace({name: 'UIComponent', params: { step: '2'}});
        break;
      case 4:
        this.$router.replace({name: 'ProgressBoard', params: { step: '3'}});
        break;
      default:
        this.$router.push({name: 'CreateAccount'});
    }
  }
}
