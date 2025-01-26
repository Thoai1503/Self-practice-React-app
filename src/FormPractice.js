import React from "react";
import { useReducer, useState } from "react";

const reducer = (todos, action) => {
  if (action.type == "ADD_TODO") {
    return [...todos, setTodos(action.payload)];
  }
  if (action.type == "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload);
  }
};

const setTodos = (name) => {
  return { id: Date.now(), name: name, complete: false };
};
const FormPractice = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      return;
    } else if (todo.trim() !== "") {
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].name === todo) {
          return;
        }
      }
      dispatch({ type: "ADD_TODO", payload: todo });
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.name}{" "}
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPractice;
