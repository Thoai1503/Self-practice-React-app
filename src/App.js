import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action === "increment") return { ...state, count: state.count + 1 };

  if (action.type === "plus_count2")
    return { ...state, count: state.count + action.payload };
};

function App() {
  const initState = {
    count: 0,
    name: "fdf",
  };

  //     data          signal to trigger                                     initialized state
  // to component         reducer                   ( state     action)        to be modified
  //       |                |                            \      /               /
  //       |                |                             \    /               /
  //       1                2                                3                4
  const [state, dispatch] = useReducer(reducer, initState);
  const [count2, setCount] = useState(0);
  return (
    <div className="App">
      <p>Count: {state.count}</p>

      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </button>
      <button
        onClick={() => dispatch({ type: "plus_count2", payload: count2 })}
      >
        Plus count2
      </button>
      <p>Count 2:{count2}</p>
      <button onClick={() => setCount(count2 + 1)}>incre count2:</button>
    </div>
  );
}

export default App;
