"use client"; // 👈 Needed for all components using useForm()

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RichTextEditorV2 from "@/components/RichTextEditorV2";

// 1. Zod schema
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
});

// 2. Infer form type from schema
type FormData = z.infer<typeof schema>;

export default function TestFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name field */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...register("name")}
            className="w-full p-2 border rounded"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full p-2 border rounded"
            placeholder="Your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content">
            {/* <RichTextEditorV2 value={content} onChange={setContent} /> */}
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
