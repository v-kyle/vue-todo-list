import {Component, Prop} from 'vue-property-decorator';

import styles from './TaskItem.css?module';
import MyStore from "@/store/store";
import {useStore} from "vuex-simple";
import Task from "@/models/Task";
import {VueComponent} from "@/shims-vue";

interface IProps {
    task: Task;
}

@Component
export default class TaskItem extends VueComponent<IProps> {
    @Prop()
    private task!: Task;

    public store: MyStore = useStore(this.$store);

    toggleTask(): void {
        this.store.toggleTask(this.task.id);
    }

    render() {
        return (
            <div class={styles.todos__task}>
                <input type="checkbox" checked={this.task.done} onChange={this.toggleTask} />
                <span class={this.task.done && styles['todos__task--done']}>
                    {this.task.title}
                </span>
            </div>
        )
    }
}
