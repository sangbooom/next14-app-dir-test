"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "2px solid blue" }}>
      <h2>Counter (client component)</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
