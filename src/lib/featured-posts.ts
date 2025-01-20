type Project = {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
};

export const posts: Project[] = [
  {
    id: 0,
    url: "/posts",
    title: "Life is good",
    description: "life is goo and I am happy",
    date: "Wed 25 Sep 2024",
  },
  {
    id: 1,
    url: "/posts",
    title: "Life is not good",
    description: "life is not  goo and I am hungry",
    date: "Wed 25 Sep 2024",
  },
];
