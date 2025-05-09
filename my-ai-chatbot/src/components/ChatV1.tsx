"use client";
import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatV1() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "No response.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Error talking to the AI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col h-screen bg-gradient-to-br from-gray-100 to-white">
      <header className="p-4 text-center bg-[#635bff] text-white shadow">
        <h1 className="text-2xl font-semibold">🤖 Smart AI Chat</h1>
      </header>

      <section className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-md px-4 py-3 rounded-2xl shadow-sm text-sm whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-[#635bff] text-white rounded-br-none"
                  : "bg-white text-gray-800 border rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border px-4 py-3 rounded-2xl text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </section>

      <footer className="p-4 border-t bg-white">
        <div className="flex gap-3">
          <textarea
            rows={2}
            className="flex-1 p-3 border border-gray-300 rounded-xl resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-[#635bff]"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-[#635bff] text-white px-6 py-2.5 rounded-xl shadow hover:bg-indigo-600 transition disabled:opacity-50"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </footer>
    </main>
  );
}
