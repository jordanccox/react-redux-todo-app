import { createStore } from 'redux'
import rootReducer from './reducers/combinedReducer'

const store = createStore(rootReducer);

// store.dispatch({ type: "todos/todoAdded", payload: "Hola" })
// store.dispatch({ type: 'todos/todoAdded', payload: "hello friend" })
// store.dispatch({ type: 'todos/todoAdded', payload: 'hello world' })
// store.dispatch({ type: 'todos/allSelected' })
// store.dispatch({ type: 'todos/completeSelected' })
// store.dispatch({ type: "todos/todoAdded", payload: "Hola" })
// store.dispatch({ type: 'todos/todoAdded', payload: "hello friend" })
// store.dispatch({ type: 'todos/todoAdded', payload: 'hello world' })
// store.dispatch({ type: 'todos/makeActiveSelected' })
// store.dispatch({ type: 'todos/categorySelected', payload: { todoId: 0, category: "work" }})
// store.dispatch({ type: 'filters/statusChanged', payload: 'active' })
// store.dispatch({ type: 'filters/categorySelected', payload: 'work' })
// store.dispatch({ type: 'filters/categorySelected', payload: 'home' })
// store.dispatch({ type: 'filters/categoryUnselected', payload: 'home' })
// store.dispatch({ type: 'filters/categorySelected', payload: 'school' })
// // store.dispatch({ type: 'todos/categoryUnselected', payload: 0 })
// console.log(store.getState())

export default store