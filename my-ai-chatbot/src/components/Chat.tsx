"use client";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setResponse(data.response || data.error || "No response");
    } catch (err) {
      setResponse("Failed to fetch response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🤖 OpenRouter Chatbot</h1>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={sendMessage}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>
      <div className="mt-4 p-4 border bg-gray-100 rounded min-h-[100px]">
        {response}
      </div>
    </main>
  );
}
