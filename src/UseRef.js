import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const myRef = useRef(
    <div
      className="my-demo"
      style={{
        width: "50px",
        height: 50,
      }}
    ></div>
  );
  const [isVisible, setIsVisible] = useState(true);
  const handleHover = () => {
    setIsVisible(false);
    console.log(isVisible);
  };

  const handleHoverOut = () => {
    setIsVisible(true);
    console.log(isVisible);
  };
  console.log(myRef.current);
  return (
    <div>
      <div
        ref={myRef}
        className="my-demo"
        onMouseOver={handleHover}
        style={{
          display: isVisible ? "block" : "none",
          width: "50px",
          height: 50,
        }}
      ></div>
    </div>
  );
};

export default UseRef;
