import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center rounded-[20px] overflow-hidden text-white"
      style={{ backgroundImage: `url(/your-bg-image.jpg)` }}
    >
      <div className="backdrop-brightness-[.55] px-6 py-20 sm:px-12 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          RENT A CAR IN DUBAI
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Rent or buy cars, book chauffeurs and yachts – all commission-free!
        </p>

        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-1 flex space-x-2 shadow-lg">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
              Rent
            </button>
            <button className="text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Buy
            </button>
          </div>
        </div>

        {/* <!-- Search bar --> */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="flex items-center bg-white text-gray-900 px-4 py-2 rounded-full w-full">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
            <input
              type="text"
              placeholder="Search by car name e.g. BMW X7"
              className="outline-none bg-transparent w-full"
            />
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            VIEW ALL CARS →
          </button>
        </div>

        {/* <!-- Bottom Links --> */}
        <div className="mt-6 text-sm flex justify-center space-x-4 text-white/80">
          <a href="#" className="hover:underline">
            List Your Cars
          </a>
          <a href="#" className="hover:underline">
            Car with Driver
          </a>
          <a href="#" className="hover:underline">
            Yacht Rentals
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
