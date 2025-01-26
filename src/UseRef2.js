import React, { useEffect, useRef, useState } from "react";

function UseRefCount() {
  const [count, setCount] = useState(0);
  const ref = useRef(1);
  // const [count2, setCount2] = useState(0);

  useEffect(() => {
    ref.current += 1;
    // setCount2((c) => c + 1);
    console.log(ref.current);
    // console.log("Count 2:", count2);
  });

  const handleAdd = () => {
    setCount((c) => c + 1);
  };

  const handleSubtract = () => {
    setCount((c) => c - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </>
  );
}

export default UseRefCount;
