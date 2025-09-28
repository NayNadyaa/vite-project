import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Task 1: Component Creation and State Management</h2>
      <p className="mb-2">Value: {count}</p>
      <button
        className="px-3 py-1 rounded mr-2 text-white"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="px-3 py-1 rounded text-white"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
