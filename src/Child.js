import React from "react";

export default function Child({ setState }) {
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </div>
  );
}
