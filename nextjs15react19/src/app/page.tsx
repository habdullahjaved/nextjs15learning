import React from "react";
import Demo from "./components/Demo";
import CrudForm from "./components/crud/CrudForm";

const Home: React.FC = () => {
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* <Demo
        message="Hello, Next.js with TypeScript and Tailwind CSS!"
        listOfItems={items}
      /> */}

      <CrudForm />
    </div>
  );
};

export default Home;
