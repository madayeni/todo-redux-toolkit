import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div>
      <h1>TODO APP</h1>
      <AddTodo />
      <TodoList />
      <div>Total: 5</div>
      <div>Total Completed: 3</div>
    </div>
  );
};

export default App;
