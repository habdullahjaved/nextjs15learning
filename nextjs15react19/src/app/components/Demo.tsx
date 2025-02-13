import React from "react";
import Item from "./Item";
import { DemoProps } from "@/types/types";

const Demo: React.FC<DemoProps> = ({ message, listOfItems }) => {
  return (
    <div className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md">
      <p className="text-lg font-semibold">{message}</p>
      <ul className="mt-2 space-y-2">
        {listOfItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Demo;
