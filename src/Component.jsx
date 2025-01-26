import React from "react";

export default function Component() {
  const type = "CheckBox";
  const Button = () => {
    const click = () => {
      alert("Clicking...");
    };

    return <button onClick={click}>Click me</button>;
  };

  const Com = {
    Input() {
      return <input type="text" />;
    },
    CheckBox() {
      return <input type="checkbox" />;
    },
  };
  function App() {
    console.log(Com[type]);
    const Component2 = Com[type];

    return (
      <>
        <Button />
        <Component2 />
      </>
    );
  }
  return (
    <div>
      <App />
    </div>
  );
}
