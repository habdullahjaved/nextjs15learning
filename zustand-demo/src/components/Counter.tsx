"use client";

import { useCounterStore } from "@/store/counterStore";

export default function Counter() {
  const { count, increase, reset } = useCounterStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Zustand Demo</h1>
      <p className="my-4 text-lg">Count: {count}</p>
      <button
        onClick={increase}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Increase
      </button>
      <button
        onClick={reset}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}
