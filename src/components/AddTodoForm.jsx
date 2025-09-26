import { useState } from 'react'

const AddTodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!input.trim()) return
    onAddTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm
