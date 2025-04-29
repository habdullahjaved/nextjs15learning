"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
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

        {/* Dots under image */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentImage === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 flex flex-col space-y-2">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{specs}</p>
          <div className="text-primary font-semibold text-xl">{price}</div>
        </div>

        {/* Book Now Button */}
        <button className="mt-2 bg-primary hover:bg-indigo-600 text-white text-sm py-2 px-4 rounded-full transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
