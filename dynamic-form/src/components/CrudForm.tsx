"use client";

import React, { useState } from "react";

interface FieldConfig {
  label: string;
  key: string;
  type: "text" | "number" | "url" | "file" | "select";
  options?: string[];
  width?: "full" | "half";
}

interface DynamicFormProps {
  fields: FieldConfig[];
  initialValues: { [key: string]: any };
  onSubmit: (data: { [key: string]: any }) => void;
}

const CrudForm: React.FC<DynamicFormProps> = ({
  fields,
  initialValues,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div
            key={field.key}
            className={`flex flex-col space-y-2 ${
              field.width === "half" ? "col-span-1" : "col-span-full"
            }`}
          >
            <label
              htmlFor={field.key}
              className="text-sm font-semibold text-gray-700"
            >
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                id={field.key}
                name={field.key}
                value={formData[field.key] || ""}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:border-[#635bff] shadow-sm"
              >
                <option value="">Select {field.label}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                type="file"
                id={field.key}
                name={field.key}
                onChange={handleFileChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:border-[#635bff] shadow-sm"
              />
            ) : (
              <input
                type={field.type}
                id={field.key}
                name={field.key}
                value={formData[field.key] || ""}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:border-[#635bff] shadow-sm"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#635bff] hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CrudForm;
