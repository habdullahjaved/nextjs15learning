// components/DealOfTheDay.jsx
export default function DealOfTheDay() {
  return (
    <section className="bg-yellow-100 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Deal of the Day 🛒
          </h2>
          <p className="text-gray-700 mb-6">
            Get fresh farm tomatoes at a special price today only! Don’t miss
            the offer.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition">
            Shop Now
          </button>
        </div>
        <img
          src="/images/tomotos.jpg"
          alt="Tomatoes"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
