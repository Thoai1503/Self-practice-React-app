import React, { useEffect, useReducer, useState } from "react";

const reducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        setTodo(action.payload.name1, action.payload.name2, action.payload.age),
      ];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    case "FILTER":
      return todos.filter((todo) => todo.age >= 23);
    default:
      return todos;
  }
};

const setTodo = (name1, name2, age) => {
  const ageP = parseInt(age, 10);
  return {
    id: Date.now(),
    name1: name1,
    name2: name2,
    age: ageP,
    complete: false,
  };
};

const Form3 = () => {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name1, name2, age } });
    setName1("");
    setName2("");
    setAge("");
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
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name1} - {todo.name2} -{todo.age} years old
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          dispatch({ type: "FILTER" });
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default Form3;
