import React, { useRef, useEffect } from "react";

function Timer() {
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      console.log("Tick");
    }, 1000);
    console.log(timerId);
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return (
    <div>
      <p>Check the console to see "Tick" every second.</p>
    </div>
  );
}

export default Timer;
