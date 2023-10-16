import { useSelector } from "react-redux"
import TodoListItem from './TodoListItem'

export default function TodoList() {
  const selectedTodos = useSelector(state => state.todos)
  
  const todoList = selectedTodos.map((todo) => {
    return <TodoListItem key={todo.id} text={todo.text} id={todo.id} />
  })
  return (
    <div>{todoList}</div>
  )
}