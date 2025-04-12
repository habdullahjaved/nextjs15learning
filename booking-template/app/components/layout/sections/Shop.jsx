// app/shop/page.jsx or pages/shop.jsx (depending on your structure)
import GroceryCard from "../cards/GroceryCard";

const products = [
  {
    title: "Fresh Organic Apples",
    price: 8.99,
    imageUrl: "/images/product3.jpg",
    slug: "fresh-organic-apples",
  },
  {
    title: "Green Broccoli",
    price: 6.5,
    imageUrl: "/images/product2.jpg",
    slug: "green-broccoli",
  },
  {
    title: "Fresh Organic Apples",
    price: 8.99,
    imageUrl: "/images/product3.jpg",
    slug: "fresh-organic-apples",
  },
  {
    title: "Brown Eggs (12 pcs)",
    price: 10.0,
    imageUrl: "/images/product1.jpg",
    slug: "brown-eggs",
  },
  {
    title: "Green Broccoli",
    price: 6.5,
    imageUrl: "/images/product2.jpg",
    slug: "green-broccoli",
  },
  {
    title: "Brown Eggs (12 pcs)",
    price: 10.0,
    imageUrl: "/images/product1.jpg",
    slug: "brown-eggs",
  },
];

export default function Shop() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop Groceries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <GroceryCard key={item.slug} {...item} />
        ))}
      </div>
    </section>
  );
}

// export default Shop
