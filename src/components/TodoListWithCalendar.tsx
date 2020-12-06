import { Component, Vue } from 'vue-property-decorator';

import Calendar from "@/components/Calendar";
import TodoList from "@/components/TodoList";

@Component
export default class TodoListWithCalendar extends Vue {
    render() {
        return (
            <div>
                <Calendar />
                <TodoList />
            </div>
        )
    }
}
