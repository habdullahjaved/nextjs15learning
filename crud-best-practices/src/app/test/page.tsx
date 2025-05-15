"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Define Zod schema
const titleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
});

// 2. Infer TS type from Zod schema
type TitleFormData = z.infer<typeof titleSchema>;

export default function TitleForm() {
  console.log("🔁 Component Rendered");

  // 3. Setup useForm with zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    watch,
  } = useForm<TitleFormData>({
    resolver: zodResolver(titleSchema),
    defaultValues: {
      title: "",
    },
  });

  // 4. Log every input change
  const watchedTitle = watch("title");
  console.log("📝 Watching input: title =", watchedTitle);

  // 5. Handle form submission
  const onSubmit = (data: TitleFormData) => {
    console.log("✅ Form submitted with valid data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-sm mx-auto">
      <label className="block mb-2">
        Title
        <input
          type="text"
          {...register("title")}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">⚠️ {errors.title.message}</p>
        )}
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isSubmitting}
      >
        Submit
      </button>

      {/* Debug info */}
      <div className="mt-4 text-sm text-gray-600">
        <p>Submit Successful: {isSubmitSuccessful ? "Yes" : "No"}</p>
        <p>Submitting: {isSubmitting ? "Yes" : "No"}</p>
      </div>
    </form>
  );
}
