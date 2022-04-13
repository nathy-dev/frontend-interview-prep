import { useState, useRef } from "react";
import ToDoList from "./components/ToDoList";


function App() {
  const [todos, setTodos] = useState([]);
  const [currentID, setCurrentID] = useState(0);
  const todoNameRef = useRef();


  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    setCurrentID(prevId => prevId += 1)
    if(name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: currentID, name: name, complete: false}]
    })
    todoNameRef.current.vale = '';
    
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos)
  }

  function handleClearAll() {
    setTodos([])
  }

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <button onClick={handleClearAll}>Clear All</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;