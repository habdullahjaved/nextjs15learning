// components/NewsletterCTA.jsx
export default function NewsletterCTA() {
  return (
    <section className="bg-green-600 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated on Fresh Offers
        </h2>
        <p className="mb-6">
          Subscribe to our newsletter for the latest deals, new arrivals, and
          exclusive discounts!
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-green-700 font-semibold px-6 py-2 rounded-md hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
