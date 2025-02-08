import React, { useReducer, useState } from "react";

const reducer = (todos, action) => {
  if (action.type === "ADD_TODO") return [...todos, setTodo(action.payload)];
};
const setTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};



const Form2 = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: name });
    setName("");
  };
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.name}</div>
        ))}
      </div>
    </>
  );
};

export default Form2;
