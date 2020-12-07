import { State, Getter, Mutation } from 'vuex-simple';
import Task from "@/models/Task";
import { v4 as uuid } from 'uuid';

export default class MyStore {
    @State()
    public tasks: Array<Task> = [];
    public day: number = new Date().getDate();

    constructor(activeDay: number = new Date().getDate()) {
        this.day = activeDay;
    }

    @Getter()
    public get allDaysWithTasks(): Array<number> {
        return this.tasks.map(task => task.date.getDate());
    }

    @Getter()
    public get tasksForActiveDay(): Array<Task> {
        return this.tasks.filter(task => task.date.getDate() === this.day);
    }

    @Getter()
    public get activeDay(): number {
        return this.day;
    }

    @Mutation()
    public changeActiveDay(day: number) {
        this.day = day;
    }

    @Mutation()
    public addTask(title: string) {
        const date = new Date(new Date().setDate(this.activeDay));
        this.tasks.push({
            id: uuid(),
            title,
            date,
            done: false,
        });
    }

    @Mutation()
    public toggleTask(id: string) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.done = !task.done;
        }
    }
}
