// @ts-nocheck
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const xStyles = {
  color: "black",
  fontSize: "32px",
  cursor: "pointer",
  marginLeft: "10px",
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editableTodo, setEditableTodo] = useState({
    value: "",
    isCompleted: false,
    isBeingEdited: false,
  });
  const [todos, setTodos] = useState([
    {
      value: "I need to Study React",
      isCompleted: false,
      isBeingEdited: false,
    },
    {
      value: "I need to Study Redux",
      isCompleted: false,
      isBeingEdited: false,
    },
  ]);

  const handleAddTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { value: todo, isCompleted: false, isEditable: false },
    ]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleEditMode = (index) => {
    setEditableTodo({ ...todos[index] });
    const newTodos = [...todos];
    newTodos[index].isBeingEdited = true;
    setTodos(newTodos);
  };

  const handleEditTodo = (value) => {
    setEditableTodo({ ...editableTodo, value });
  };

  const handleDone = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, editableTodo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={() => handleAddTodo(inputValue)}>Add </button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return todo.isBeingEdited ? (
            <>
              <input
                type="text"
                value={editableTodo.value}
                onChange={(e) => handleEditTodo(e.target.value)}
              />
              <button onClick={() => handleDone(index)}>Done</button>
            </>
          ) : (
            <li>
              <span
                onClick={() => handleCompleteTodo(index)}
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {todo.value}
              </span>
              <span style={xStyles} onClick={() => handleDelete(index)}>
                X
              </span>
              <span onClick={() => handleEditMode(index)}>Edit</span>
            </li>
          );
        })}
        {/* {todos.map((todo, index) => (
          <li>{todo}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
