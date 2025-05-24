"use client";
import { useState } from "react";

type FilterProps = {
  filters: { name: string; options: string[] }[];
  onFilterChange: (filters: Record<string, string>) => void;
};

export default function VehicleFilter({
  filters,
  onFilterChange,
}: FilterProps) {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    const updated = { ...selected, [name]: value };
    setSelected(updated);
    onFilterChange(updated);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {filters.map((filter) => (
        <select
          key={filter.name}
          onChange={(e) => handleChange(filter.name, e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All {filter.name}</option>
          {filter.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
