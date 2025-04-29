"use client";

import React, { useState } from "react";
import CrudForm from "@/components/CrudForm";

// Example page or component to test the form
const AddFrom = () => {
  const [submittedData, setSubmittedData] = useState<{
    [key: string]: any;
  } | null>(null);

  const fields = [
    { label: "Full Name", key: "fullName", type: "text", width: "full" },
    { label: "Email Address", key: "email", type: "text", width: "half" },
    { label: "Phone Number", key: "phone", type: "text", width: "half" },
    {
      label: "Profile Image",
      key: "profileImage",
      type: "file",
      width: "full",
    },
    {
      label: "Role",
      key: "role",
      type: "select",
      options: ["Admin", "User", "Guest"],
      width: "half",
    },
    { label: "Website", key: "website", type: "url", width: "half" },
  ];

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    profileImage: "",
    role: "",
    website: "",
  };

  const handleFormSubmit = (data: { [key: string]: any }) => {
    console.log("Form Data Submitted:", data);
    setSubmittedData(data);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 text-center text-[#635bff]">
        Dynamic CRUD Form Demo
      </h1>

      {/* <div className="rounded shadow-[-2px_-2px_4px_rgba(91,99,255,0.4),_2px_2px_4px_rgba(91,99,255,0.5)] px-2 py-3"> */}

      <div className="rounded-lg shadow-[-2px_-2px_4px_rgba(91,99,255,0.4),_2px_2px_4px_rgba(91,99,255,0.5)] p-4 bg-white">
        <CrudForm
          fields={fields}
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
        />
      </div>

      {submittedData && (
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Submitted Data:
          </h2>
          <pre className="text-sm bg-white p-4 rounded-md overflow-x-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AddFrom;
