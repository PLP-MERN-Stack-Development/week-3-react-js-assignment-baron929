import React, { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center space-x-4">
      <span className="text-xl">{count}</span>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}