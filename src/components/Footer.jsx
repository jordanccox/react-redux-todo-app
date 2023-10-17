import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleToggleFilter = (event) => {
    if (event.target.checked) {
      dispatch({
        type: "filters/statusChanged",
        payload: event.target.value,
      });
    }
  };

  const handleToggleCategories = (event) => {
    if (event.target.checked) {
      dispatch({
        type: 'filters/categorySelected',
        payload: event.target.value
      });
    }

    if (!event.target.checked) {
      dispatch({
        type: 'filters/categoryUnselected',
        payload: event.target.value
      })
    }
  };

  const handleTodoSelectAll = () => {
    dispatch({
      type: 'todos/allSelected'
    });
  };

  const handleTodoDeleteSelected = () => {
    const selectedTodos = todos.filter((todo) => todo.selected);

    selectedTodos.forEach((todo) => dispatch({type: 'todos/todoDeleted', payload: todo.id}));
  };

  const handleTodoMarkComplete = () => {
    dispatch({ type: 'todos/completeSelected' });
  };

  const handleTodoMarkActive = () => {
    dispatch({ type: 'todos/makeActiveSelected' });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md mt-3">
          Filter by Status:
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterOptionsStatus"
              value="All"
              onChange={handleToggleFilter}
              id="checkAll"
            />
            <label className="form-check-label" htmlFor="checkAll">
              All
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterOptionsStatus"
              value="Completed"
              onChange={handleToggleFilter}
              id="checkCompleted"
            />
            <label className="form-check-label" htmlFor="checkCompleted">
              Completed
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterOptionsStatus"
              value="Active"
              onChange={handleToggleFilter}
              id="checkActive"
            />
            <label className="form-check-label" htmlFor="checkActive">
              Active
            </label>
          </div>
        </div>
        <div className="col-md mt-3">
          Actions:
          <br />
          <button type="button" className="btn btn-primary" onClick={handleTodoSelectAll}>Select All</button>
          <br />
          <button type="button" className="btn btn-danger mt-2" onClick={handleTodoDeleteSelected}>Delete Selected</button>
          <br />
          <button type="button" className="btn btn-success mt-2" onClick={handleTodoMarkComplete}>Mark Selected as Complete</button>
          <br />
          <button type="button" className="btn btn-warning mt-2" onClick={handleTodoMarkActive}>Mark Selected as Active</button>
        </div>
        <div className="col-md mt-3">
          Filter by Category:
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="filterOptionsCategories"
              value="Work"
              onChange={handleToggleCategories}
              id="checkWork"
            />
            <label className="form-check-label" htmlFor="checkWork">
              Work
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="filterOptionsCategories"
              value="Home"
              onChange={handleToggleCategories}
              id="checkHome"
            />
            <label className="form-check-label" htmlFor="checkHome">
              Home
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="filterOptionsCategories"
              value="School"
              onChange={handleToggleCategories}
              id="checkSchool"
            />
            <label className="form-check-label" htmlFor="checkSchool">
              School
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
