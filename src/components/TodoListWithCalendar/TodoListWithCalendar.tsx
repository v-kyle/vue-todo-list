import { Component, Vue } from 'vue-property-decorator';

import Calendar from "@/components/Calendar/Calendar";
import TodoList from "@/components/TodoList/TodoList";

import { useStore } from 'vuex-simple';
import MyStore from "@/store/store";

import styles from "./TodoListWithCalendar.css?module";

@Component
export default class TodoListWithCalendar extends Vue {

    public store: MyStore = useStore(this.$store);

    render() {
        return (
            <div class={styles.container}>
                <Calendar />
                <TodoList />
            </div>
        )
    }
}
