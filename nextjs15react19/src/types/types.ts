// Reusable Type for Items
export interface ItemType {
  id: number;
  title: string;
}

// Props for Demo Component
export interface DemoProps {
  message: string;
  listOfItems: ItemType[];
}

// Props for Item Component
export interface ItemProps {
  item: ItemType;
}
