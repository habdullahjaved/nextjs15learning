import React from 'react';

const page = () => {
  return (
    <div className="h-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="rounded-2xl p-5 shadow-2xl bg-yellow-100">
            <h2>Test Card {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              quae?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
