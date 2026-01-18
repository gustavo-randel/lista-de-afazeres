import { useState } from 'react'
import 'App.css'

function App() {
  const [newItem, setNewItem] = useState('Give a name to your task')
  const [todo, setTodo] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTodo((currentTodos) => {
      return   [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}]
    })
    setNewItem('')
  }

  function toggleTodo(id, completed) {
    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
      })
    })
  }

  function deleteTodos(id) {
    setTodo(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        onChange={e => setNewItem(e.target.value)}
        value={newItem} 
        type="text" 
        id="item" 
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="">
      {todo.length === 0 && "No tasks on your list!"}
      {todo.map (todo => {
        return (
          <li key={todo.id}>
          <label>
          <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={e => toggleTodo(todo.id, e.target.checked)}
          />
          {todo.title}
          </label>
          <button onClick={() => deleteTodos(todo.id)} className="btn btn-danger"></button>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default App
