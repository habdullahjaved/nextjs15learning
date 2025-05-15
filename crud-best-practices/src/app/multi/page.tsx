"use client";

import { useState } from "react";
import { MultiSelectD } from "@/components/test/MultiSelectD";

// Define your feature type
interface Feature {
  id: number;
  name: string;
  description?: string;
}

// Sample features data
const features: Feature[] = [
  { id: 1, name: "Air Conditioning", description: "Climate control system" },
  { id: 2, name: "ABS", description: "Anti-lock braking system" },
  { id: 3, name: "Driver Assistance", description: "Advanced driver aids" },
  { id: 4, name: "Music System", description: "Premium audio system" },
];

export default function FeatureSelector() {
  // State for selected features
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);

  return (
    <div className="max-w-xl p-6 mx-auto space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Select Vehicle Features</h2>

        <MultiSelectD<Feature>
          options={features}
          selected={selectedFeatures}
          onChange={setSelectedFeatures}
          getOptionLabel={(feature) => feature.name}
          getOptionValue={(feature) => feature.id}
          placeholder="Search features..."
          className="w-full"
          creatable={false}
        />

        <div className="text-sm text-gray-500">
          {selectedFeatures.length} features selected
        </div>
      </div>

      {/* Example submission handling */}
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        onClick={() => {
          console.log("Selected features:", selectedFeatures);
          alert(
            `Submitted features: ${selectedFeatures
              .map((f) => f.name)
              .join(", ")}`
          );
        }}
      >
        Submit Features
      </button>

      {/* Display selected features */}
      {selectedFeatures.length > 0 && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="mb-2 font-medium">Selected Features:</h3>
          <ul className="space-y-1">
            {selectedFeatures.map((feature) => (
              <li
                key={feature.id}
                className="flex items-center justify-between px-3 py-2 bg-white rounded-md"
              >
                <div>
                  <span className="font-medium">{feature.name}</span>
                  {feature.description && (
                    <span className="ml-2 text-gray-500">
                      {feature.description}
                    </span>
                  )}
                </div>
                <button
                  onClick={() =>
                    setSelectedFeatures((prev) =>
                      prev.filter((f) => f.id !== feature.id)
                    )
                  }
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// "use client";

// import React, { useState } from "react";
// import { Feature, features, MultiSelect } from "@/components/test/MultiSelect";

// export default function Page() {
//   const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);

//   return (
//     <div className="p-4 max-w-lg">
//       <h1 className="text-xl font-bold mb-4">Select Features</h1>
//       <MultiSelect
//         options={features}
//         selected={selectedFeatures}
//         onChange={setSelectedFeatures}
//       />
//       <div className="mt-4">
//         <strong>Selected:</strong>{" "}
//         {selectedFeatures.map((f) => f.name).join(", ") || "None"}
//       </div>
//     </div>
//   );
// }
