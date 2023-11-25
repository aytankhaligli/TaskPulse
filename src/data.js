export const usersList = [
  {
    id: 1,
    organizationId: 1,
    name: "Aytan",
    surname: "Khaligli",
    email: "ayten.xaliqli@gmail.com",
    password: "1234567",
  },
  {
    id: 2,
    organizationId: 1,
    name: "Sabina",
    surname: "Mammadova",
    email: "sabina.mammad@gmail.com",
    password: "12345678",
    isAdmin: false,
  },
];

export const organizations = [
  {
    id: 1,
    organizationName: "TechHub Solutions",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville",
    admin: {
      username: "Shaig",
      email: "sh.khaligli@gmail.com",
      password: "swjdgcecvkf",
    },
  },
  {
    id: 2,
    organizationName: "Innovate Co.",
    phoneNumber: "987-654-3210",
    address: "456 Innovation Blvd, Innovation City",
    admin: {
      username: "Aysel",
      email: "Muradova",
      password: "rnfvfv",
    },
  },
];

export const tasks = [
  {
    id: 1,
    title: "Develop New Feature",
    description: "Implement a new feature for the project",
    deadline: "2023-12-01",
    status: "In Progress",
    assignedTo: [1, 2],
  },
  {
    id: 2,
    title: "Bug Fixing",
    description: "Fix bugs reported in the testing phase",
    deadline: "2023-12-05",
    status: "To Do",
    assignedTo: [1, 2],
  },
];
