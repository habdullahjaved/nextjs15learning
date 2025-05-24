"use client";
import { useState } from "react";
import VehicleFilter from "@/components/listing/VehicleFilter";
import VehicleListing from "@/components/listing/VehicleListing";

const allVehicles = [
  {
    id: 1,
    title: "50 Seater Luxury Bus",
    image: "/bus.jpg",
    capacity: 50,
    category: "Bus",
    price: "AED 800",
  },
  {
    id: 2,
    title: "15 Seater Van",
    image: "/van.jpg",
    capacity: 15,
    category: "Van",
    price: "AED 400",
  },
  {
    id: 3,
    title: "Luxury Car",
    image: "/car.jpg",
    capacity: 4,
    category: "Car",
    price: "AED 600",
  },
  // ...more
];

const filtersConfig = [
  { name: "category", options: ["Bus", "Van", "Car", "Yacht"] },
  { name: "capacity", options: ["4", "7", "15", "30", "50"] },
];

export default function Page() {
  const [filtered, setFiltered] = useState(allVehicles);

  const handleFilterChange = (filters: Record<string, string>) => {
    const result = allVehicles.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return String(item[key as keyof typeof item]) === value;
      });
    });

    setFiltered(result);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <VehicleFilter
        filters={filtersConfig}
        onFilterChange={handleFilterChange}
      />
      <VehicleListing items={filtered} />
    </div>
  );
}
