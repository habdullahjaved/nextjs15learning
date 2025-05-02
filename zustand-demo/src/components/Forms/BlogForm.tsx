// pages/YourForm.tsx or any form component
"use client";
import { useForm, Controller } from "react-hook-form";
import RichTextEditorV2 from "../RichTextEditorV2";

type FormData = {
  title: string;
  content: string;
};

export default function BlogForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="p-4 bg-amber-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Example: Title field */}
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
          className="border p-2 w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        {/* Rich Text Field (for content) */}
        <Controller
          name="content"
          control={control}
          defaultValue=""
          rules={{ required: "Content is required" }}
          render={({ field }) => (
            <>
              <RichTextEditorV2 value={field.value} onChange={field.onChange} />
              {errors.content && (
                <p className="text-red-500 mt-1">{errors.content.message}</p>
              )}
            </>
          )}
        />

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
