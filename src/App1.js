import React from "react";
import { App2 } from "./App2";
const App1 = () => {
  const { data } = App2();
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return <p>{item[0].name}</p>;
      })}
    </div>
  );
};

export default App1;
