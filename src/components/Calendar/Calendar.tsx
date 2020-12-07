import { Component, Vue } from 'vue-property-decorator';
import { getDaysInMonth, startOfMonth} from 'date-fns';
import { ru } from 'date-fns/locale'
import styles from "./Calendar.css?module";

import CalendarDay from "@/components/CalendarDay/CalendarDay";

@Component
export default class Calendar extends Vue {

    currentDate: Date = new Date();

    get firstDayInCurrentMonth(): number {
        const firstDay = startOfMonth(this.currentDate).getDay();
        return firstDay === 0 ? 6 : firstDay - 1;
    }

    get weekDays(): Array<string> {
        return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    }

    get monthDays(): Array<number | null> {
      const result: Array<number | null> = [];
      for (let i = 0; i < this.firstDayInCurrentMonth; i++) {
          result.push(null);
      }

      result.push(...Object.keys(Array(getDaysInMonth(this.currentDate)).fill(0)).map(num => +num + 1));
      return result;
    }

    get monthName(): string {
        const result = [];

        for (let i = 0; i < 12; i++) {
            result.push(ru.localize?.month(i));
        }
        return result[this.currentDate.getMonth()];
    }

    render() {
        return (
            <div class={styles.calendar}>
                <h3 class={styles.calendar__header}>{ this.monthName } { this.currentDate.getFullYear() }</h3>
                <div class={[styles.calendar__days, styles['calendar__days--week']]}>
                    {this.weekDays.map(day => <div>{day}</div>)}
                </div>
                <div class={styles.calendar__days}>
                    {this.monthDays.map(date => <CalendarDay date={date} />)}
                </div>
            </div>
        )
    }
}
