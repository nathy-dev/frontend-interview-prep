import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  const handleTodoClick = () => {
      toggleTodo(todo.id)
  }
  return (
    <div>
        <label>
            <input type='checkbox'
            onChange={handleTodoClick}
            checked={todo.complete} 
            />
            {todo.name}
        </label>
    </div>
  )
}
