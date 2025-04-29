"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface CarCardProps {
  images: string[];
  title: string;
  specs: string;
  price: string;
}

const CarCardV2: React.FC<CarCardProps> = ({ images, title, specs, price }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentImage((c) => (c + 1) % images.length); // Switch to next image after 100% progress
          return 0; // Reset progress
        }
        return prev + 2; // Increase progress (2% every 100ms => 5s full)
      });
    }, 100); // 100ms interval for smooth progress

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setProgress(0); // Reset progress immediately when next image is clicked
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    setProgress(0);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="rounded-3xl shadow-xl border border-gray-200 overflow-hidden bg-white flex flex-col max-w-sm transition hover:shadow-2xl hover:border-primary/50">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden group rounded-t-3xl">
        <img
          src={images[currentImage]}
          alt={title}
          className="object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-t-3xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Heart Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorited ? "fill-primary text-primary" : "text-gray-500"
            }`}
          />
        </button>

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

        {/* Dots Section - Centered */}
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
      <div className="p-5 flex flex-col space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{specs}</p>
        <div className="text-primary font-semibold text-2xl">{price}</div>

        {/* Book Now */}
        <button className="mt-3 bg-primary hover:bg-indigo-600 text-white text-sm py-2 px-6 rounded-full transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCardV2;
