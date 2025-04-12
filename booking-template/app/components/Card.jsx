import Dropdown from "./Navbar/Dropdown";

export default function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm mx-auto hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
