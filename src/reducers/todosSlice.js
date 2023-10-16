const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}
const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'todos/todoAdded':
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
          selected: false
        }
      ]
    case 'todos/todoDeleted':
      return state.filter(todo => {
        if (todo.id === action.payload) {
          return false
        }

        return true
      })
    case 'todos/todoCompletedToggled':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })
    case 'todos/todoSelectedToggled': // might not need this
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, selected: !todo.selected }
        }

        return todo
      })
    case 'todos/allSelected': 
      return state.map(todo => { return { ...todo, selected: true } })
    case 'todos/deleteSelected':
      return state.filter(todo => {
        if (todo.selected === true) {
          return false
        }

        return true
      })
    case 'todos/completeSelected':
      return state.map(todo => {
        if (todo.selected) {
          return { ...todo, completed: true }
        }

        return todo
      })
    case 'todos/makeActiveSelected':
      return state.map(todo => {
        if (todo.selected) {
          return { ...todo, completed: false }
        }

        return todo
      })
    case 'todos/categorySelected': {
      const { todoId, category } = action.payload // { type: 'todos/categorySelected', payload: { todoId: id#, category: "work" }}

      return state.map(todo => {
        if (todo.id === todoId ) {
          return { ...todo, category }
        }

        return todo
      })
    }
    case 'todos/categoryUnselected': 
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { id: todo.id, text: todo.text, completed: todo.completed, selected: todo.selected }
        }

        return todo
      })
    default:
      return state
  }
}

export default todosReducer