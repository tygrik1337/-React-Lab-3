Дерево компонентів

App
│
└── TodoList (state: todos)
    │
    ├── AddTodoForm
    │    ↑ onAddTodo(newTask)
    │
    └── TodoItem (state: isCompleted)
         props: task, onDelete
         ├── [Checkbox] → змінює isCompleted
         └── [Delete Button] ↑ onDelete(id)
