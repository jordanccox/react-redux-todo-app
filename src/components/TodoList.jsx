import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  let selectedTodos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  if (filters.categories.length > 0) {
    selectedTodos = selectedTodos.filter((todo) => filters.categories.includes(todo.category))
  }

  if (filters.status === "Completed") {
    selectedTodos = selectedTodos.filter((todo) => todo.completed);
  }

  if (filters.status === "Active") {
    selectedTodos = selectedTodos.filter((todo) => !todo.completed);
  }


  const todoList = selectedTodos.map((todo) => {
    return <TodoListItem key={todo.id} text={todo.text} id={todo.id} />;
  });
  return <div>{todoList}</div>;
}
