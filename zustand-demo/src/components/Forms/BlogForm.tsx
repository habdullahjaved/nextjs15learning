// pages/BlogForm.tsx
"use client";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import RichTextEditorV2 from "../RichTextEditorV2";

type Blog = {
  title: string;
  content: string;
  locale: string;
};

type FormValues = {
  blogs: Blog[];
};

const defaultBlogs: Blog[] = [
  { title: "", content: "", locale: "en" },
  { title: "", content: "", locale: "ar" },
];

export default function BlogForm() {
  const { control, register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { blogs: defaultBlogs },
  });

  const { fields } = useFieldArray({
    name: "blogs",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("submitted:", data.blogs);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-amber-100 space-y-6"
    >
      {fields.map((field, index) => (
        <div key={field.id} className="border p-4 rounded">
          <h3 className="font-semibold mb-2">
            Locale: {field.locale.toUpperCase()}
          </h3>

          {/* Title */}
          <input
            {...register(`blogs.${index}.title` as const, { required: true })}
            placeholder="Title"
            className="border p-2 w-full mb-2"
          />
          {formState.errors.blogs?.[index]?.title && (
            <p className="text-red-500 text-sm">Title is required</p>
          )}

          {/* Content */}
          <Controller
            name={`blogs.${index}.content` as const}
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <>
                <RichTextEditorV2 value={value} onChange={onChange} />
                {formState.errors.blogs?.[index]?.content && (
                  <p className="text-red-500 text-sm mt-1">
                    Content is required
                  </p>
                )}
              </>
            )}
          />

          {/* Keep locale in the form so it submits, but hide it */}
          <input
            type="hidden"
            {...register(`blogs.${index}.locale` as const)}
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit All Blogs
      </button>
    </form>
  );
}
