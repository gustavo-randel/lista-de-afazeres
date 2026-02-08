import {NewTaskForm} from 'NewTaskForm'
import {TaskList} from 'TaskList'
import { useState } from 'react'
import 'App.css'

function App() {
  const [todo, setTodo] = useState([])

  function addTodo(title) {
    setTodo((currentTodos) => {
    return   [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]
  })  }

  function toggleTodo(id, completed) {
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
      })
    })  }

  function deleteTodo(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })  }

  return (
    <>
    <NewTaskForm onSubmit={addTodo}></NewTaskForm>
    <h1 className="header">Todo List</h1>
    <TaskList 
    todo={todo}
    toggleTodo={toggleTodo}
    deleteTodo={deleteTodo}
    ></TaskList>
    </>
  )
}

export default App
