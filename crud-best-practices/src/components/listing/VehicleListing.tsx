type Vehicle = {
  id: number;
  title: string;
  image: string;
  capacity: number;
  category: string;
  price: string;
};

export default function VehicleListing({ items }: { items: Vehicle[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {items.map((vehicle) => (
        <div
          key={vehicle.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={vehicle.image}
            alt={vehicle.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{vehicle.title}</h2>
          <p className="text-sm text-gray-500">Capacity: {vehicle.capacity}</p>
          <p className="text-lg font-bold text-primary">{vehicle.price}</p>
        </div>
      ))}
    </div>
  );
}
