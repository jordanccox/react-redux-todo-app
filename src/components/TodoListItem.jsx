import { useDispatch, useSelector } from "react-redux";

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

/* eslint-disable react/prop-types */
export default function TodoListItem(props) {
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => selectTodoById(state, props.id));

  const handleDelete = () => {
    dispatch({ type: "todos/todoDeleted", payload: props.id });
  };

  const handleToggleComplete = () => {
    dispatch({ type: "todos/todoCompletedToggled", payload: props.id });
  };

  const handleSelectCategory = (event) => {
    dispatch({
      type: "todos/categorySelected",
      payload: { todoId: props.id, category: event.target.textContent },
    });
  };

  const handleUnselectCategory = () => {
    dispatch({ type: "todos/categoryUnselected", payload: props.id });
  };

  const handleTodoSelected = () => {
    dispatch({ type: 'todos/todoSelectedToggled', payload: props.id });
  };

  return (
    <div className={`${selectedTodo.selected ? "bg-warning" : "bg-light"} ps-2 pe-2 pt-3 pb-3 mt-2`}>
      <div className="row">
        <div className="col-3">
          <button
            className={
              selectedTodo.completed
                ? "btn btn-success"
                : "btn btn-danger"
            }
            onClick={handleToggleComplete}
          >
            {selectedTodo.completed ? "Complete" : "Incomplete"}
          </button>
        </div>
        <div className="col select-todo" onClick={handleTodoSelected}>
          <span className="" >
            {props.text}
          </span>
        </div>
        <div className="col">
          <div className="text-end">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedTodo.category ? selectedTodo.category : "Category"}
            </button>
            <button className="btn btn-danger ms-3" onClick={handleDelete}>
              Delete
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={handleSelectCategory}>
                Work
              </li>
              <li className="dropdown-item" onClick={handleSelectCategory}>
                Home
              </li>
              <li className="dropdown-item" onClick={handleSelectCategory}>
                School
              </li>
              <li className="dropdown-item" onClick={handleUnselectCategory}>
                - Remove Category
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
