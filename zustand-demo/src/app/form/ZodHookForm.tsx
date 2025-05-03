"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// 1. Schema
const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  category: z.enum(["A", "B"], {
    errorMap: () => ({ message: "Please select a valid category" }),
  }),
  aboutYou: z
    .string()
    .min(10, "Tell us more about yourself (at least 10 chars)"),
});

export function ZodHookForm() {
  // 2. useForm with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 w-full"
            {...register("firstName")}
            placeholder="First name"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <select
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 w-full"
            {...register("category")}
          >
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <textarea
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 w-full"
            {...register("aboutYou")}
            placeholder="About you"
          />
          {errors.aboutYou && (
            <p className="text-red-500">{errors.aboutYou.message}</p>
          )}
        </div>
      </div>

      <p className="mt-4">{data}</p>

      <input
        className="bg-green-600 text-white mt-4 px-3 py-2 rounded-md shadow-2xl"
        type="submit"
      />
    </form>
  );
}
