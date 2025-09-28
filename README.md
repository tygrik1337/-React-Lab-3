## Component Tree

```mermaid
graph TD
    App[App]
    App --> TodoList["TodoList\n(state: todos)"]
    TodoList --> AddTodoForm["AddTodoForm\n↑ onAddTodo(newTask)"]
    TodoList --> TodoItem["TodoItem\n(state: isCompleted)\nprops: task, onDelete"]
    TodoItem --> Checkbox["[Checkbox]\n→ змінює isCompleted"]
    TodoItem --> DeleteButton["[Delete Button]\n↑ onDelete(id)"]
