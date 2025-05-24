import React from "react";

const ImageGallery = () => {
  const images = [
    { id: 1, src: "https://placehold.co/600x400", alt: "Image 1" },
    { id: 2, src: "https://placehold.co/600x400", alt: "Image 2" },
    { id: 3, src: "https://placehold.co/600x400", alt: "Image 3" },
    { id: 4, src: "https://placehold.co/600x400", alt: "Image 4" },
    { id: 5, src: "https://placehold.co/600x400", alt: "Image 5" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
              <h3 className="absolute bottom-2 left-2 text-white font-semibold">
                {image.alt}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
              <h3 className="absolute bottom-2 left-2 text-white font-semibold">
                {image.alt}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
