import {Component, Prop} from 'vue-property-decorator';

import styles from "./CalendarDay.css?module";
import {VueComponent} from "@/shims-vue";
import MyStore from "@/store/store";
import {useStore} from "vuex-simple";

interface IProps {
    date: number | null;
}

@Component
export default class CalendarDay extends VueComponent<IProps> {
    @Prop()
    private date!: number | null;

    public store: MyStore = useStore(this.$store);

    get btnClasses(): Array<string> {
        const classes = [];
        if (this.date === this.store.activeDay) {
            classes.push(styles.active);
        }
        if (!this.date) {
            classes.push(styles.hidden);
        }
        if (this.date && this.store.allDaysWithTasks.includes(this.date)) {
            classes.push(styles['has-task']);
        }
        return classes;
    }

    changeActiveDay(day: number | null) {
        if (day) {
            this.store.changeActiveDay(day);
        }
    }

    render() {
        return (
            <button onClick={() => this.changeActiveDay(this.date)} class={[this.btnClasses]}>{this.date}</button>
        )
    }
}
