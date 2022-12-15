import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import "./todopage.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export function TodoPage() {
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

  const openCloseBtn = useRef(null);
  const todoPage = useRef(null);
  function openCloseBtnToggle() {
    openCloseBtn.current.classList.toggle("open");
    todoPage.current.classList.toggle("open");
  }

  return (
    <>
      <div className="todo-page" ref={todoPage}>
        <h1>Todo List</h1>
        <div className="input-row">
          <input className="todo-input" ref={todoNameRef} type="text" />
          <button className="add-todo-btn" onClick={handleAddTodo}>
            <div className="add-todo-btn-bars"></div>
          </button>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <button className="clear-all-btn" onClick={handleClearTodos}>
          Clear Completed Todos
        </button>
        <div>{todos.filter((todo) => !todo.complete).length} left todos</div>
      </div>
      <div className="open-close-btn" ref={openCloseBtn} onClick={openCloseBtnToggle}></div>
    </>
  );
}
