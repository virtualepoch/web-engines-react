import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import "./todopage.css";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  const openCloseBtnRef = useRef(null);
  const openCloseBtn = openCloseBtnRef.current;
  const todoPageRef = useRef(null);
  const todoPage = todoPageRef.current;
  function openCloseBtnToggle() {
    openCloseBtn.classList.toggle("open");
    todoPage.classList.toggle("open");
  }

  return (
    <>
      <div className="todo-page" ref={todoPageRef}>
        <h1>Todo List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Completed Todos</button>
        <div>{todos.filter((todo) => !todo.complete).length} left todos</div>
      </div>
      <div className="open-close-btn" ref={openCloseBtnRef} onClick={openCloseBtnToggle}>
        <p>todo</p>
        <div className="open-close-btn-bars"></div>
      </div>
    </>
  );
}

export default TodoPage;
