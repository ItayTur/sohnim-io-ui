const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000);
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string;
  leadId: number;
};

export const products: Product[] = [
  {
    id: generateRandomId(),
    name: "Sample Product 1",
    price: 100,
    description: "This is a sample product",
    category: "Category 1",
    leadId: 1,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 2",
    price: 200,
    description: "This is another sample product",
    category: "Category 1",
    leadId: 1,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 3",
    price: 300,
    description: "This is yet another sample product",
    category: "Category 2",
    leadId: 2,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 4",
    price: 400,
    description: "This is a sample product",
    category: "Category 3",
    leadId: 3,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 5",
    price: 500,
    description: "This is a sample product",
    category: "Category 4",
    leadId: 4,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 6",
    price: 600,
    description: "This is a sample product",
    category: "Category 5",
    leadId: 5,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 7",
    price: 700,
    description: "This is a sample product",
    category: "Category 6",
    leadId: 6,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 8",
    price: 800,
    description: "This is a sample product",
    category: "Category 7",
    leadId: 7,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 9",
    price: 900,
    description: "This is a sample product",
    category: "Category 8",
    leadId: 8,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 10",
    price: 1000,
    description: "This is a sample product",
    category: "Category 9",
    leadId: 9,
  },
  {
    id: generateRandomId(),
    name: "Sample Product 11",
    price: 1100,
    description: "This is a sample product",
    category: "Category 10",
    leadId: 10,
  },
];
