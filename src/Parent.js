import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [state, _setState] = useState(1);

  const setState = (value) => {
    _setState(value);
  };
  return (
    <div>
      <p>Trạng thái: {state}</p>
      <Child setState={setState} />
    </div>
  );
};

export default Parent;
