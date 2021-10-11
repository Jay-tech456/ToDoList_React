import './App.css';
import React, { useEffect, useState } from "react";
import TodoForm from "./Components/TODOFORM";
import TodoList from "./Components/TODOLIST";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function addTodo(todo) {
      setTodos([todo, ...todos]);
  }
  
  return (
    <div className="App">
      <p> React Todo </p>
      <TodoForm addTodo={addTodo} />
      <TodoList todoes = {todos} />
    </div>
  );
}

export default App;
