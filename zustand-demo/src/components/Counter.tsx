"use client";

import { useCounterStore } from "@/store/counterStore";

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded"
          disabled={count < 1}
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
