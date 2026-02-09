import TaskItem from './TaskItem.jsx'

function TaskList({todo, toggleTodo, deleteTodo}) {
    return (
    <ul className="">
      {todo.length === 0 && "No tasks on your list!"}
      {todo.map (todo => {
        return <TaskItem 
        {...todo} 
        key={todo.id}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        ></TaskItem>
      })}
    </ul>
    )
}

export default TaskList 