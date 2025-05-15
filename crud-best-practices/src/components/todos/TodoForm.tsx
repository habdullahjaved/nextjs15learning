"use client";
import DynamicForm from "../test/DynamicForm";
import { todoSchema, TodoFormData } from "@/schemas/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the FieldConfig type for dynamic form fields
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

export default function TodoForm({
  onCreate,
}: {
  onCreate: (data: TodoFormData) => Promise<void>; // FIXED
}) {
  const fields: FieldConfig[] = [
    {
      label: "Title",
      key: "title",
      type: "text",
      required: true,
      width: "full",
    },
  ];

  const initialValues: { [key: string]: any } = {
    title: "",
  };

  const handleSubmit = async (data: TodoFormData) => {
    await onCreate(data); // async function
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-[-2px_-2px_4px_rgba(91,99,255,0.4),_2px_2px_4px_rgba(91,99,255,0.4)] ">
      {/* <div className="w-full max-w-lg mx-auto bg-white p-4 rounded drop-shadow-[4px_0_10px_rgba(0,0,0,0.1)] drop-shadow-[-4px_0_10px_rgba(0,0,0,0.1)]"></div> */}
      <DynamicForm
        fields={fields}
        initialValues={initialValues}
        schema={todoSchema}
        onSubmit={handleSubmit} // Pass the handleSubmit to DynamicForm
      />
    </div>
  );
}
