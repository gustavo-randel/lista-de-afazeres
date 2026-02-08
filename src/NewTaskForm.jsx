import { useState } from "react"

function NewTaskForm({onSubmit}) {
    const [newItem, setNewItem] = useState('Give a name to your task')
    function handleSubmit(e) {
        if (newItem === '') return
        e.preventDefault()
        onSubmit(newItem)
        setNewItem('')
    }
    return (
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
    )
}

export default NewTaskForm