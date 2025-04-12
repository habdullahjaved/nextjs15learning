export default function MiddleBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-4">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-10" />
        <span className="text-2xl font-bold text-green-600">Green</span>
        <span className="text-2xl font-bold text-black">Cart</span>
      </div>

      <input
        type="text"
        placeholder="Search for items..."
        className="w-full md:w-1/2 px-4 py-2 bg-gray-100 rounded"
      />

      <div className="flex items-center gap-6">
        {/* Cart, Wishlist, User */}
        <button>🛒</button>
        <button>❤️</button>
        <button>👤</button>
      </div>
    </div>
  );
}
