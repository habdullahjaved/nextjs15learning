import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-center text-[#635bff]">
        Dynamic CRUD Form Demo
      </h1>
      <Link href={"/crud/add"}>Add</Link>
      {/* <AddFrom /> */}

      {/* Grid */}

      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center text-[#635bff]">
          Grid Learning
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
          <div className="shadow-emerald-50 p-6 rounded-2xl bg-green-300">
            Item 1
          </div>

          <div className="shadow-emerald-50 p-6 rounded-2xl bg-red-300">
            Item 2
          </div>

          <div className="shadow-emerald-50 p-6 rounded-2xl bg-blue-300">
            Item 3
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-2 bg-amber-300  rounded-2xl p-6">
            Big Item (spans 2 columns)
          </div>
          <div className="bg-amber-600 rounded-2xl p-6">Small Item</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <div className="bg-purple-100 p-6 rounded-lg">Card 1</div>
          <div className="bg-purple-200 p-6 rounded-lg">Card 2</div>
          <div className="bg-purple-300 p-6 rounded-lg">Card 3</div>
          <div className="bg-purple-400 p-6 rounded-lg">Card 4</div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-3 rounded"
          />

          <textarea
            placeholder="Message"
            className="border p-3 rounded md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-[#635bff] text-white py-3 rounded md:col-span-2"
          >
            Submit
          </button>
        </form>

        {/* autogrids */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-5">
          <div className="bg-gray-100 p-4 rounded">Item 1</div>
          <div className="bg-gray-200 p-4 rounded">Item 2</div>
          <div className="bg-gray-300 p-4 rounded">Item 3</div>
          <div className="bg-gray-400 p-4 rounded">Item 4</div>
          <div className="bg-gray-500 p-4 rounded">Item 5</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="col-span-2 bg-blue-100 p-4">Main Content</div>
          <div className="bg-blue-200 p-4">Sidebar</div>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center h-64 bg-gray-200 mt-5">
          <div className="bg-pink-300 p-6 rounded">Item 1</div>
          <div className="bg-pink-400 p-6 rounded">Item 2</div>
        </div>

        <div className="grid grid-cols-1 gap-4 place-items-center h-64 bg-gray-200 mt-5">
          <div className="bg-pink-300 p-6 rounded">Item 1</div>
        </div>
      </div>
    </div>
  );
};

export default page;
