"use client"; // ✅ Mark this as a client component

import React from "react";
import { FormBuilder } from "@/components/Forms/FormBuilder";

const TestFormBuilder = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <FormBuilder
        fields={[
          {
            name: "title",
            label: "Title (EN)",
            type: "text",
            required: true,
            locale: "en",
          },
          {
            name: "meta_description",
            label: "Meta Description (EN)",
            type: "textarea",
            locale: "en",
          },
          {
            name: "content",
            label: "Content (EN)",
            type: "editor",
            locale: "en",
          },
          {
            name: "status",
            label: "Status",
            type: "radio",
            options: [
              { label: "Active", value: 1 },
              { label: "Inactive", value: 0 },
            ],
          },
        ]}
        onSubmit={(data) => console.log(data)} // ✅ This is now valid
      />
    </div>
  );
};

export default TestFormBuilder;
