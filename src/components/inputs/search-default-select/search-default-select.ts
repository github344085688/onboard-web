import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tlp from "./search-default-select.vue";
import UnderLine from "../../common/under-line/under-line";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
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

export default class SearchDefaultSelect extends WiseVue {

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


  isFocused: boolean = false;
  isSearch: boolean = false;
  isSelect: boolean = false;
  isHandleBin: boolean = false;
  transitionValue: string = '';
  transitionSelectddatas: Array<any> = [];
  searchByInput: Subject<void> = new Subject();

  mounted() {
    if (typeof (this.value) == 'object') this.transitionValue = this.value[this.filterKey];
    else this.transitionValue = this.value;
    this.transitionSelectddatas = this.selectdatas;
    this.searchByInput.debounceTime(1500).subscribe(
      this.searchInvoiceByPaging,
      err => {
        this.$errorAlert({
          title: 'error',
          content: err,
          cancel: 'go back',
        }).then((ord: any) => {
        }).catch((err: any) => {
        });
      }
    );
  }

  private searchInvoiceByPaging() {
    this.isSearch = true;
    this.transitionSelectddatas = [];
    setTimeout(() => {
      this.isSearch = false;
      this.transitionSelectddatas = ['selectdatas', 'defaul', 'aaaa', 'bbbbbb', 'ccc'];
    }, 2000);

  }

  handleFocus() {
    this.isFocused = true;
    this.isHandleBin = true;
    this.isSelect = true;
    this.transitionValue = '';
  }

  handleBlur(isValidate: any) {
    this.isSelect = false;
    this.isFocused = false;
    this.isHandleBin = false;
    if (this.selectdatas.length < 1) {
      this.isFocused = false;

    }
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
