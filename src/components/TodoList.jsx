import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = task => setTodos([...todos, { id: Date.now(), task }])
  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id))

  return (
    <div className="todo-list-container">
      <AddTodoForm onAddTodo={addTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  )
}

export default TodoList
