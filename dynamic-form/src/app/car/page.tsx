import React from "react";
import CarCard from "../crud/components/CardCard";

const page = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CarCard
        images={[
          "/cars/mercedes1.jpg",
          "/cars/mercedes2.jpg",
          "/cars/mercedes3.jpg",
        ]}
        title="Mercedes-Benz G63 AMG"
        specs="V8 Engine, 577 hp, AWD"
        price="AED 1,200/day"
      />

      <CarCard
        images={[
          "/cars/mercedes1.jpg",
          "/cars/mercedes2.jpg",
          "/cars/mercedes3.jpg",
        ]}
        title="Mercedes-Benz G63 AMG"
        specs="V8 Engine, 577 hp, AWD"
        price="AED 1,200/day"
      />
      <CarCard
        images={[
          "/cars/mercedes1.jpg",
          "/cars/mercedes2.jpg",
          "/cars/mercedes3.jpg",
        ]}
        title="Mercedes-Benz G63 AMG"
        specs="V8 Engine, 577 hp, AWD"
        price="AED 1,200/day"
      />

      {/* Add more CarCards */}
    </div>
  );
};

export default page;
