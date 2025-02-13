"use client";
import { useState, useEffect } from "react";

const CrudForm = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ title: "", description: "" });
    fetchItems();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/items/${id}`, { method: "DELETE" });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Item
        </button>
      </form>

      <ul className="mt-8 space-y-4">
        {items.map((item: any) => (
          <li
            key={item.id}
            className="flex justify-between p-4 bg-gray-100 rounded"
          >
            <div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-3 py-1 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudForm;
