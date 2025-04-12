export default function Topbar() {
  return (
    <div className="bg-gray-100 text-sm hidden md:flex justify-between px-4 py-2">
      <div>
        <a href="#">Seller Center</a> | <a href="#">Register Seller</a>
      </div>
      <div className="flex gap-4">
        <a href="#">Help & Contact</a>
        <a href="#">Order Tracking</a>
        <span>🇺🇸</span>
      </div>
    </div>
  );
}
