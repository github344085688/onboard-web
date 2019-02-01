import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Provide } from "vue-property-decorator";
import tlp from "./create-account.vue";
import BaselineInput from "../../../components/inputs/baseline-input/baseline-input";
import TagsInput from "../../../components/inputs/tags-input/tags-input";
import DefaultSelect from "../../../components/inputs/default-select/default-select";
import AccountFramework from "../../../components/layout/account-framework/account-framework";

@Component({
  mixins: [tlp],
  components: {
    BaselineInput,
    TagsInput,
    DefaultSelect,
    AccountFramework
  }
})
export default class CreateAccount extends WiseVue {
  isExport: boolean = false;
  createAccount: any = {};
  customer: string = '';
  customerCode: string = '';
  Depts: string = '';

  mounted() {

  }

  selectdatas: Array<any> = [
    {id: '00', name: 'ky002'},
    {id: '002', name: 'ky003Add'},
    {id: '003', name: 'ky0003A3Add'},
    {id: '004', name: 'ky0Add'},
    {id: '005', name: 'bottom'},
    {id: '005', name: 'bottom'}
  ];

  selectdatasss: any = {id: '00', name: 'ky002'};

  onSelect(select: any) {
    this.isExport = true;
  }

  cancel() {
    this.$errorAlert({
      title: 'Cancel Your Progress?',
      content: 'Are you sure you want to cancel? <br> Your changes will be reverted. ',
      confirm: 'ok',
      cancel: 'go back',
    }).then((ord: any) => {
    }).catch((err: any) => {
    });
  }

  onSubmit() {
    this.$validator.validateAll().then(
      res => {
        if (res) {
          this.$router.replace({name: 'SetupBilling', params: { step: '1'}});
        }
      }
    );
  }


}
