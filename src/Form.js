import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "changeName") return { ...state, name: action.payload };
  if (action.type === "inc") return { ...state, age: state.age + 1 };
};

const Form = () => {
  const initState = {
    name: "Vo Giang Thoai",
    age: 22,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function handleButtonClick() {
    dispatch({ type: "inc" });
  }

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) => {
          e.preventDefault();
          dispatch({ type: "changeName", payload: e.target.value });
        }}
      />
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <button onClick={handleButtonClick}>Increment age</button>
    </div>
  );
};

export default Form;
