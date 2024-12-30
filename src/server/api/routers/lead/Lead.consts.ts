// Mocked DB
export type Lead = {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  email: string;
};

export const leads: Lead[] = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    email: "jon.snow@example.com",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    email: "cersei.lannister@example.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    email: "jaime.lannister@example.com",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    email: "arya.stark@example.com",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 99,
    email: "daenerys.targaryen@example.com",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Joe",
    age: 150,
    email: "joe.melisandre@example.com",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    email: "ferrara.clifford@example.com",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    email: "rossini.frances@example.com",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    email: "harvey.roxie@example.com",
  },
];
