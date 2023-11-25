export const usersList = [
  {
    id: 1,
    organizationId: 1,
    username: "Aytan",
    name: "Aytan",
    surname: "Khaligli",
    email: "ayten.xaliqli@gmail.com",
    password: "1234567",
    isAdmin: false,
  },
  {
    id: 2,
    organizationId: 1,
    username: "Sabina",
    name: "Sabina",
    surname: "Mammadova",
    email: "sabina.mammad@gmail.com",
    password: "12345678",
    isAdmin: false,
  },
  {
    id: 3,
    organizationId: 1,
    username: "Aysel",
    name: "",
    surname: "",
    email: "aysel@mail.ru",
    password: "1234",
    isAdmin: true,
  },
  {
    id: 4,
    organizationId: 2,
    name: "",
    surname: "",
    username: "Shaig",
    email: "sh.khaligli@gmail.com",
    password: "swjdgcecvkf",
    isAdmin: true,
  },
];

export const organizations = [
  {
    id: 1,
    organizationName: "TechHub Solutions",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville",
  },
  {
    id: 2,
    organizationName: "Innovate Co.",
    phoneNumber: "987-654-3210",
    address: "456 Innovation Blvd, Innovation City",
  },
];

export const tasks = [
  {
    id: 1,
    organizationId: 2,
    title: "Develop New Feature",
    description: "Implement a new feature for the project",
    deadline: "2023-12-01",
    status: "In Progress",
    assignedTo: [1, 2],
  },
  {
    id: 2,
    organizationId: 1,
    title: "Bug Fixing",
    description: "Fix bugs reported in the testing phase",
    deadline: "2023-12-05",
    status: "To Do",
    assignedTo: [1, 2],
  },
];
