import React, { useReducer, useState } from "react";

const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, setTodo(action.payload.name1, action.payload.name2)];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
};

const setTodo = (name1, name2) => {
  return { id: Date.now(), name1: name1, name2: name2, complete: false };
};

const Form3 = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name1, name2 } });
    setName1("");
    setName2("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          placeholder="Name 1"
        />
        <input
          type="text"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          placeholder="Name 2"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name1} - {todo.name2}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form3;
