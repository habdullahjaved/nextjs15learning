import Card from "./components/Card";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar/Navbar1";
import Dropdown from "./components/Navbar/Dropdown";
import Hero from "./components/layout/sections/Hero";
export default function Home() {
  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
    { id: 5, title: "Card 4", description: "This is the fourth card." },
    { id: 6, title: "Card 4", description: "This is the fourth card." },
    { id: 7, title: "Card 4", description: "This is the fourth card." },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Responsive Cards
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card) => (
            <div key={card.id} className="w-full sm:w-[48%] lg:w-[30%]">
              <Card title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Responsive Profile Card
        </h2>

        <div className="flex justify-center flex-wrap gap-4">
          <div className="w-full sm:w-[48%] lg:w-[30%]">
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
              <Image
                src="/1.jpg"
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full object-cover"
                priority
                title="Profile Picture"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-1">
                John Doe
              </h2>
              <p className="text-gray-600 mb-4">
                I love traveling and sharing adventures!
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
                Follow
              </button>
            </div>
          </div>
        </div>

        <Dropdown />
      </div>
    </>
  );
}
