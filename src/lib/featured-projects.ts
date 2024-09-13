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
    url: "https://weatherglto.vercel.app/",
    title: "Weather App",
    descripcion: `Learn is a website housing my personal notes on fundamental concepts of electricity and robotics. It is currently under development.`,
    tools: ["Next.js", "Tailwindcss", "TypeScript"],
  },
  {
    id: 1,
    url: "https://learn.robinlabs.xyz/",
    title: "Learn",
    descripcion: `My weather application offers user-friendly information on current weather and future forecasts, featuring a modern interface and functionalities like dark mode for an optimal user experience.`,
    tools: ["Nextra"],
  },
  {
    id: 2,
    url: "https://robinlabs-v0.vercel.app/projects",
    title: "Robinlabs-vo",
    descripcion: `This is a personal website that showcases my projects, blog posts, and other content. This is the old version of my portfolio.`,
    tools: ["Next.js", "Tailwindcss", "TypeScript"],
  },
];
