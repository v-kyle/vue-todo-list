import { Component, Vue } from 'vue-property-decorator';
import TodoListWithCalendar from "@/components/TodoListWithCalendar";

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <TodoListWithCalendar />
      </div>
    )
  }
}
