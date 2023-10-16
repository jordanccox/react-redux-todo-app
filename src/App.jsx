import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center">Todo App</h1>
            <hr />
            <div className="todo-container">
              <Header />
              <h4>Todos:</h4>
              <TodoList />
            </div>
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
