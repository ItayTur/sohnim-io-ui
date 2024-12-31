function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}

export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

export type ProductCategory = {
  id: number;
  name: string;
  products: Product[];
};

export const productCategoriesByLead: Record<number, ProductCategory[]> = {
  1: [
    {
      id: generateRandomId(),
      name: "Category 1",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 1",
          price: 100,
          description: "This is a sample product",
        },
        {
          id: generateRandomId(),
          name: "Sample Product 2",
          price: 200,
          description: "This is another sample product",
        },
      ],
    },
  ],
  2: [
    {
      id: generateRandomId(),
      name: "Category 2",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 3",
          price: 300,
          description: "This is yet another sample product",
        },
      ],
    },
  ],
  3: [
    {
      id: generateRandomId(),
      name: "Category 3",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 4",
          price: 400,
          description: "This is a sample product",
        },
      ],
    },
  ],
  4: [
    {
      id: generateRandomId(),
      name: "Category 4",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 5",
          price: 500,
          description: "This is a sample product",
        },
      ],
    },
  ],
  5: [
    {
      id: generateRandomId(),
      name: "Category 5",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 6",
          price: 600,
          description: "This is a sample product",
        },
      ],
    },
  ],
  6: [
    {
      id: generateRandomId(),
      name: "Category 6",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 7",
          price: 700,
          description: "This is a sample product",
        },
      ],
    },
  ],
  7: [
    {
      id: generateRandomId(),
      name: "Category 7",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 8",
          price: 800,
          description: "This is a sample product",
        },
      ],
    },
  ],
  8: [
    {
      id: generateRandomId(),
      name: "Category 8",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 9",
          price: 900,
          description: "This is a sample product",
        },
      ],
    },
  ],
  9: [
    {
      id: generateRandomId(),
      name: "Category 9",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 10",
          price: 1000,
          description: "This is a sample product",
        },
      ],
    },
  ],
  10: [
    {
      id: generateRandomId(),
      name: "Category 10",
      products: [
        {
          id: generateRandomId(),
          name: "Sample Product 11",
          price: 1100,
          description: "This is a sample product",
        },
      ],
    },
  ],
};
