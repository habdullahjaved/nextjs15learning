"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

// Define FieldConfig type for dynamic fields
type FieldType = "text" | "number" | "url" | "select" | "file"; // Add other field types as necessary

type FieldConfig = {
  label: string;
  key: string;
  type: FieldType;
  options?: string[] | Record<string, any>[]; // Options for select fields
  valueKey?: string; // For objects in options to extract the value
  labelKey?: string; // For objects in options to extract the label
  width?: "full" | "half"; // Layout for responsive design
  required?: boolean;
};

interface DynamicFormProps {
  fields: FieldConfig[];
  initialValues: { [key: string]: any };
  onSubmit: (data: { [key: string]: any }) => void; // Accepts any form data
  schema: ZodType<any>; // Zod schema for validation
  loading?: boolean;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  initialValues,
  onSubmit,
  schema,
  loading = false,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialValues, // Set default values
  });

  const handleFormSubmit = (data: { [key: string]: any }) => {
    onSubmit(data);
    reset(); // Optionally reset form after submit
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div
          key={field.key}
          className={`flex flex-col ${
            field.width === "full" ? "w-full" : "w-1/2"
          } space-y-2`}
        >
          <label
            htmlFor={field.key}
            className="text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>

          {field.type === "select" ? (
            <Controller
              name={field.key}
              control={control}
              render={({ field }) => (
                <select
                  id={field.key}
                  {...field}
                  className="p-2 w-full border rounded-md"
                >
                  <option value="">Select...</option>
                  {Array.isArray(field.options) &&
                    field.options.map((option, index) => {
                      const value =
                        typeof option === "object"
                          ? option[field.valueKey || "value"]
                          : option;
                      const label =
                        typeof option === "object"
                          ? option[field.labelKey || "label"]
                          : option;
                      return (
                        <option key={index} value={value}>
                          {label}
                        </option>
                      );
                    })}
                </select>
              )}
            />
          ) : field.type === "file" ? (
            <Controller
              name={field.key}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="file"
                  id={field.key}
                  className="p-2 w-full border rounded-md"
                />
              )}
            />
          ) : (
            <Controller
              name={field.key}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type={field.type}
                  id={field.key}
                  className="p-2 w-full border rounded-md"
                />
              )}
            />
          )}
          {errors[field.key] && (
            <p className="text-red-500 text-sm">{errors[field.key]?.message}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="bg-purple-500 text-white p-2 rounded-md w-full mt-4"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default DynamicForm;
