import WiseVue from "../../../shared/wise-vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tlp from "./search-array-select.vue";
import UnderLine from "../../common/under-line/under-line";
import { differenceWith, isEqual, map } from 'lodash-es';
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

export default class SearchArraySelect extends WiseVue {

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
  isSearch: boolean = false;
  isHandleBin: boolean = false;
  inputValue: string = '';
  transitionSelects: Array<any> = [];
  transitionSelectdatas: Array<any> = [];
  searchByInput: Subject<void> = new Subject();

  mounted() {
    this.transitionSelects = this.value;
    this.transitionSelectdatas = differenceWith(this.selectdatas, this.value, isEqual);
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
    this.transitionSelectdatas = [];
    setTimeout(() => {
      this.isSearch = false;
      this.transitionSelectdatas = [
        { id: '00', name: 'aaa' },
        { id: '002', name: 'bbb' },
        { id: '003', name: 'ccc' },
        { id: '004', name: 'ddd' },
        { id: '005', name: 'eee' },
        { id: '006', name: 'ggg' }
      ];
    }, 2000);

  }

  handleFocus() {
    this.isFocused = true;
    this.isHandleBin = true;
    this.isSelect = true;
    this.inputValue = '';
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
