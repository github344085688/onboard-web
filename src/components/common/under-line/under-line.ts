import { Component, Prop } from "vue-property-decorator";
import WiseVue from "../../../shared/wise-vue";
import tlp from './under-line.vue';
@Component({
    mixins: [tlp]
})
export default class UnderLine extends WiseVue {
    @Prop({
        default: false
    })
    focus !: boolean;

    @Prop({
        default: ''
    })
    underLineColor!: string;

    @Prop({
        default: "none"
    })
    focusLineColor!: string;

    get errorLine(): any {
        if (this.underLineColor) return 'error-line';
    }

    get focusLineClass(): any {
        if (this.focus) return 'text-field-focus';
    }

}
