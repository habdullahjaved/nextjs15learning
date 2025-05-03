"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Tabs, Tab } from "@/components/ui/tabs"; // You may need to implement or install a tab UI

const languages = ["en", "ar"];

type FieldType = "text" | "textarea" | "editor" | "number" | "file" | "select";

type FieldConfig = {
  key: string;
  label: string;
  type: FieldType;
  options?: Record<string, any>[] | string[];
  valueKey?: string;
  labelKey?: string;
  width?: "full" | "half";
  multilocale?: boolean;
};

type DynamicFormProps = {
  fields: FieldConfig[];
  initialValues: Record<string, any>;
  onSubmit: (values: any) => void;
  loading?: boolean;
};

const buildZodSchema = (fields: FieldConfig[]) => {
  const shape: Record<string, any> = {};
  for (const field of fields) {
    if (field.multilocale) {
      languages.forEach((lang) => {
        shape[`${field.key}.${lang}`] = z.string().min(1);
      });
    } else if (field.type === "file") {
      shape[field.key] = z.any();
    } else {
      shape[field.key] = z.string().min(1);
    }
  }
  return z.object(shape);
};

const MultilingualCrudForm: React.FC<DynamicFormProps> = ({
  fields,
  initialValues,
  onSubmit,
  loading,
}) => {
  const schema = buildZodSchema(fields);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

  const [activeLocale, setActiveLocale] = useState("en");

  const renderField = (field: FieldConfig, locale?: string) => {
    const fieldKey = locale ? `${field.key}.${locale}` : field.key;

    if (field.type === "editor") {
      const editor = useEditor({
        extensions: [StarterKit],
        content: watch(fieldKey) || "",
        onUpdate: ({ editor }) => {
          setValue(fieldKey, editor.getHTML());
        },
      });

      return (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {field.label} ({locale})
          </label>
          <div className="border p-2 rounded-md">
            {editor && <EditorContent editor={editor} />}
          </div>
          {errors?.[field.key]?.[locale] && (
            <p className="text-red-500 text-xs mt-1">
              {errors?.[field.key]?.[locale]?.message}
            </p>
          )}
        </div>
      );
    }

    if (field.type === "textarea") {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {field.label} ({locale})
          </label>
          <textarea
            {...register(fieldKey)}
            className="w-full border rounded-md p-2"
          />
          {errors?.[field.key]?.[locale] && (
            <p className="text-red-500 text-xs mt-1">
              {errors?.[field.key]?.[locale]?.message}
            </p>
          )}
        </div>
      );
    }

    if (field.type === "file") {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          <input
            type="file"
            {...register(fieldKey)}
            className="w-full border rounded-md p-2"
          />
          {errors?.[field.key] && (
            <p className="text-red-500 text-xs mt-1">
              {errors?.[field.key]?.message}
            </p>
          )}
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          <select
            {...register(fieldKey)}
            className="w-full border rounded-md p-2"
          >
            <option value="">Select...</option>
            {field.options?.map((option, i) => {
              const value =
                typeof option === "object"
                  ? option[field.valueKey || "value"]
                  : option;
              const label =
                typeof option === "object"
                  ? option[field.labelKey || "label"]
                  : option;
              return (
                <option key={i} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
          {errors?.[field.key] && (
            <p className="text-red-500 text-xs mt-1">
              {errors?.[field.key]?.message}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          {field.label} {locale && `(${locale})`}
        </label>
        <input
          type={field.type}
          {...register(fieldKey)}
          className="w-full border rounded-md p-2"
        />
        {errors?.[field.key]?.[locale] && (
          <p className="text-red-500 text-xs mt-1">
            {errors?.[field.key]?.[locale]?.message}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6 space-y-6">
      {languages.length > 1 && (
        <Tabs
          value={activeLocale}
          onValueChange={setActiveLocale}
          className="mb-4"
        >
          {languages.map((lang) => (
            <Tab key={lang} value={lang} label={lang.toUpperCase()} />
          ))}
        </Tabs>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => {
          if (field.multilocale) {
            return renderField(field, activeLocale);
          } else {
            return renderField(field);
          }
        })}
      </div>

      <div className="text-right">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#635bff] text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default MultilingualCrudForm;
