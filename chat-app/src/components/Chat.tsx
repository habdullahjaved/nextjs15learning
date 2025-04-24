"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/socket");

    socket.on("message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow-lg">
        <h1 className="text-xl font-bold mb-4">Simple Chat</h1>
        <div className="h-64 overflow-y-auto mb-4 border p-2 rounded">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-1 text-sm text-gray-700">
              {msg}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-grow px-3 py-2 border rounded-xl focus:outline-none focus:ring"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
