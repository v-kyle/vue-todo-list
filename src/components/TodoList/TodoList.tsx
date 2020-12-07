import { Component, Vue } from 'vue-property-decorator';

import styles from './TodoList.css?module';

@Component
export default class TodoList extends Vue {
    render() {
        return (
            <div class={styles.todos}>
                TodoList
            </div>
        )
    }
}
