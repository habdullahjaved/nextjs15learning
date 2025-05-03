import React from "react";
import { HookForm } from "./HookForm";
import SimpleForm from "./SimpleForm";
import { HookImageForm } from "./HookImageForm";

const page = () => {
  return (
    <div className="p-4 bg-gray-200 space-y-6">
      <h1 className="text-2xl font-bold">Form Page</h1>
      <p className="text-gray-700">This is a simple form page.</p>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Hook Form</h2>
        {/* <HookForm /> */}

        <HookImageForm />
      </div>
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-xl font-semibold">Simple Form</h2>
        {/* <SimpleForm /> */}
      </div>
    </div>
  );
};

export default page;
