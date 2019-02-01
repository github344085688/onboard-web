import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Provide } from "vue-property-decorator";
import tlp from "./setup-billing.vue";
import BaselineInput from "../../../components/inputs/baseline-input/baseline-input";
import TagsInput from "../../../components/inputs/tags-input/tags-input";
import DefaultSelect from "../../../components/inputs/default-select/default-select";
import AccountFramework from "../../../components/layout/account-framework/account-framework";
import ArraySelect from "../../../components/inputs/array-select/array-select";
import SearchDefaultSelect from "../../../components/inputs/search-default-select/search-default-select";
import SearchArraySelect from "../../../components/inputs/search-array-select/search-array-select";


@Component({
  mixins: [tlp],
  components: {
    BaselineInput,
    TagsInput,
    DefaultSelect,
    AccountFramework,
    ArraySelect,
    SearchDefaultSelect,
    SearchArraySelect
  }
})
export default class BillingInformation extends WiseVue {
  isExport: boolean = false;
  createAccount: any = {};

  mounted() {

  }

  selectdatas: Array<any> = [
    { id: '00', name: 'ky002' },
    { id: '002', name: 'ky003Add' },
    { id: '003', name: 'ky0003A3Add' },
    { id: '004', name: 'ky0Add' },
    { id: '005', name: 'bottom' },
    { id: '006', name: 'bottom' }
  ];
  selectdatasss: Array<any> = [
    { id: '00', name: 'ky002' },
    { id: '002', name: 'ky003Add' }
  ];
  selectdd: Array<any> = [
    { id: '00', name: 'ky002' },
    { id: '002', name: 'ky003Add' },
    { id: '003', name: 'ky0003A3Add' },
    { id: '004', name: 'ky0Add' },
    { id: '005', name: 'bottom' },
    { id: '006', name: 'bottom' }
  ];
  selectdds: Array<any> = [
    { id: '00', name: 'ky002' },
    { id: '002', name: 'ky003Add' }
  ];

  selectd: Array<any> = [
    { id: '00', name: 'ky002' },
    { id: '002', name: 'ky003Add' },
    { id: '003', name: 'ky0003A3Add' },
    { id: '004', name: 'ky0Add' },
    { id: '005', name: 'bottom' },
    { id: '006', name: 'bottom' }
  ];
  selectds: Array<any> = [
    { id: '00', name: 'ky002' },
    { id: '002', name: 'ky003Add' }
  ];

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
      console.log(ord);
    }).catch((err: any) => {
      console.log("error");
    });
  }

}
