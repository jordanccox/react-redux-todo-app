import { useState } from "react"
import { useDispatch } from "react-redux"

 export default function Header() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleInput = (event) => setText(event.target.value)

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(({ type: 'todos/todoAdded', payload: text.trim() }));
      // dispatch({ type: 'filters/statusChanged', payload: "All" });
      // dispatch({ type: 'filters/categoryUnselectedAll' });
      setText('')
    }
  }

  return (
    <>
      <label htmlFor="addTodo" className="form-label"><h4>Add Todo</h4></label>
      <input type="text" className="form-control mb-3" placeholder="What do you want to do?" id="addTodo" onKeyDown={handleKeyDown} onChange={handleInput} value={text} />
    </>
  )
}