import { State, Getter, Mutation, Action } from 'vuex-simple';

interface Task {
    date: Date;
    title: string;
    done: boolean;
}

export default class MyStore {
    @State()
    public tasks: Array<Task> = [];
    public day: number = new Date().getDate();

    constructor(activeDay: number = new Date().getDate()) {
        this.day = activeDay;
    }

    @Getter()
    public get getAllTasks(): Array<Task> {
        return this.tasks;
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
    public addTask(task: Task) {
        this.tasks.push(task);
    }
}
