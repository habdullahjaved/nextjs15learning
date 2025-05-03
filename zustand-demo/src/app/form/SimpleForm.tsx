"use client";
import React from "react";

const SimpleForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    //  console.log(object)
  };

  console.log(formData);
  return (
    <div>
      <form>
        <div className="grid grid-cols-2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 m-1"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 m-1"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 m-1"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="rounded border focus:ring-1 focus:ring-gray-500 p-2 m-1"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-green-600 mt-4 px-3 py-2 rounded-md shadow-2xl"
          />
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
