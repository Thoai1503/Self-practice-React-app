import React, { useRef, useEffect, useState } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const renderCount = useRef(1); // Dùng useRef để theo dõi số lần re-render

  // useEffect sẽ chạy sau mỗi lần re-render
  useEffect(() => {
    renderCount.current += 1;
  });

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setList([...list, setItem(name)]);
    setName("");
  };

  const setItem = (Name) => {
    const newItem = { id: Date.now(), name: Name };
    return newItem;
  };
  console.log(name);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <h2>Số lần re-render: {renderCount.current}</h2>
      <button onClick={handleClick}>Tăng count</button>

      <form onSubmit={handleAdd}>
        <input value={name} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default RenderCounter;
