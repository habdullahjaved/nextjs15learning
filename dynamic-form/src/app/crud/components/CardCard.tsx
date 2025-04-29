"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Lucide Icons

interface CarCardProps {
  images: string[];
  title: string;
  specs: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ images, title, specs, price }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white flex flex-col max-w-sm transition hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden group">
        <img
          src={images[currentImage]}
          alt={title}
          className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </>
        )}
      </div>

      {/* Details Section */}
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{specs}</p>
        <div className="text-primary font-semibold text-xl">{price}</div>
      </div>
    </div>
  );
};

export default CarCard;
