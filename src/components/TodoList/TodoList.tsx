import { Component, Vue } from 'vue-property-decorator';

import styles from './TodoList.css?module';
import MyStore from "@/store/store";
import {useStore} from "vuex-simple";
import Task from "@/models/Task";
import TaskItem from "@/components/TaskItem/TaskItem";

@Component
export default class TodoList extends Vue {

    public store: MyStore = useStore(this.$store);

    get tasksForActiveDay(): Array<Task> {
        return this.store.tasksForActiveDay;
    }

    addTask(event: Event & {target: HTMLInputElement}): void {
        this.store.addTask(event.target.value);
        event.target.value = '';
    }

    render() {
        return (
            <div class={styles.todos}>
                <h3 class={styles.todos__header}>События</h3>
                <div class={styles.todos__container}>
                    <div class={styles.todos__tasks}>{this.tasksForActiveDay.map(task => <TaskItem task={task}/>)}</div>
                    <input class={styles.todos__input} placeholder={'Текст нового события'} onChange={this.addTask}/>
                </div>
            </div>
        )
    }
}
