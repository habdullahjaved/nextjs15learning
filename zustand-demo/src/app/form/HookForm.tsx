"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function HookForm() {
  const { register, handleSubmit, watch } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log("Watched change", name, value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="rounded border focus:ring-1 focus:ring-gray-500 p-2"
          {...register("firstName")}
          placeholder="First name"
        />
        <select
          className="rounded border focus:ring-1 focus:ring-gray-500 p-2"
          {...register("category", { required: true })}
        >
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea
          className="rounded border focus:ring-1 focus:ring-gray-500 p-2 col-span-2"
          {...register("aboutYou")}
          placeholder="About you"
        />
      </div>
      <p>{data}</p>
      <input
        className="bg-green-600 mt-4 px-3 py-2 rounded-md shadow-2xl"
        type="submit"
      />
    </form>
  );
}
