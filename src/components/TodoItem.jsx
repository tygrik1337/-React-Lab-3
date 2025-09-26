import { useState } from 'react'
import './TodoList.css'

const TodoItem = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
        />
        <span className={isCompleted ? 'completed-text' : ''}>{task}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default TodoItem
