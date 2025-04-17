// components/GroceryCard.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import TimeSlotPicker from "../Inputs/TimeSlotPicker";

export default function GroceryCard({ title, price, imageUrl, slug }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border">
      <Link href={`/product/${slug}`}>
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-green-600 font-bold text-md">
            AED {price.toFixed(2)}
          </p>
          <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md transition">
            Add to Cart
          </button>
        </div>
      </Link>

      {/* <div className="p-4">
        <TimeSlotPicker />
      </div> */}
    </div>
  );
}
