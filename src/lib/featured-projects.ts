type Project = {
  id: number;
  url: string;
  title: string;
  descripcion: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    id: 0,
    url: "",
    title: "Lorem Ipsum",
    descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    tools: ["radixui", "nextjs", "tailwindcss"],
  },
  {
    id: 1,
    url: "",
    title: "Lorem Ipsum",
    descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    tools: ["radixui", "nextjs", "tailwindcss"],
  },
];
