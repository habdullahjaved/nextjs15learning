import React from "react";
import { ItemProps } from "@/types/types";

const Item: React.FC<ItemProps> = ({ item }) => {
  return <li className="text-sm text-gray-700">{item.title}</li>;
};

export default Item;
