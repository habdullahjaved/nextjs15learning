"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { twMerge } from "tailwind-merge";

interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "radio" | "editor";
  options?: { label: string; value: string | number }[];
  placeholder?: string;
  required?: boolean;
  locale?: string;
}

interface FormBuilderProps {
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
  defaultValues?: any;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({
  fields,
  onSubmit,
  defaultValues = {},
}) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });

  const renderField = (field: FieldConfig) => {
    const baseClass = "w-full p-2 border rounded-md mb-4";
    const fieldKey = field.locale
      ? `${field.name}.${field.locale}`
      : field.name;

    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            {...register(fieldKey, { required: field.required })}
            className={baseClass}
            placeholder={field.placeholder}
          />
        );
      case "textarea":
        return (
          <textarea
            {...register(fieldKey, { required: field.required })}
            className={twMerge(baseClass, "h-24")}
            placeholder={field.placeholder}
          />
        );
      case "select":
        return (
          <select
            {...register(fieldKey, { required: field.required })}
            className={baseClass}
          >
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="flex gap-4 mb-4">
            {field.options?.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={opt.value}
                  {...register(fieldKey, { required: field.required })}
                />
                {opt.label}
              </label>
            ))}
          </div>
        );
      case "editor":
        return (
          <Controller
            control={control}
            name={fieldKey}
            render={({ field: { onChange, value } }) => {
              const editor = useEditor({
                extensions: [StarterKit],
                content: value || "",
                onUpdate: ({ editor }) => onChange(editor.getHTML()),
              });

              return (
                <div className="border rounded-md p-2 mb-4">
                  <EditorContent editor={editor} />
                </div>
              );
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field, idx) => (
        <div key={idx}>
          <label className="block mb-1 font-medium">{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
