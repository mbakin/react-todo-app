import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./Components/Form"
import TodoList from "./Components/TodoList";


function App() {

  // State stuff
  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); // For filter All/Completed/Uncompleted
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect ==> Run every changes
  // useEffect(() => {
  //   console.log("TEST");},[todos, status]
  // )

  // The list that will be shown on the screen when the app starts (Only once)
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status])
  // Functions Event : Filtering
  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Save Local Storage
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
  // Get Local Todos
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Check Your Todos </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
