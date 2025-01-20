import type { Post } from "./post-type";

export const posts: Post[] = [
  {
    id: "1",
    title: "My Workspace",
    description:
      "My pride and joy, a place I come to for comfort, work, and productivity.",
    publishedAt: "Jan 12, 2024",
    images: [
      "/placeholder.svg?height=300&width=400&text=Workspace+1",
      "/placeholder.svg?height=300&width=400&text=Workspace+2",
      "/placeholder.svg?height=300&width=400&text=Workspace+3",
    ],
  },
  {
    id: "2",
    title: "Urban Photography",
    description:
      "Capturing the essence of city life through architectural wonders and street scenes.",
    publishedAt: "Jan 15, 2024",
    images: [
      "/placeholder.svg?height=300&width=400&text=Urban+1",
      "/placeholder.svg?height=300&width=400&text=Urban+2",
      "/placeholder.svg?height=300&width=400&text=Urban+3",
    ],
  },
  {
    id: "3",
    title: "Night Adventures",
    description:
      "Exploring the city after dark, when the lights create a magical atmosphere.",
    publishedAt: "Jan 18, 2024",
    images: [
      "/placeholder.svg?height=300&width=400&text=Night+1",
      "/placeholder.svg?height=300&width=400&text=Night+2",
      "/placeholder.svg?height=300&width=400&text=Night+3",
    ],
  },
  {
    id: "4",
    title: "Nature Trails",
    description:
      "Finding peace and inspiration along the winding paths of forest trails.",
    publishedAt: "Jan 20, 2024",
    images: [
      "/placeholder.svg?height=300&width=400&text=Nature+1",
      "/placeholder.svg?height=300&width=400&text=Nature+2",
      "/placeholder.svg?height=300&width=400&text=Nature+3",
    ],
  },
  {
    id: "5",
    title: "Creative Process",
    description:
      "A behind-the-scenes look at how ideas transform into finished projects.",
    publishedAt: "Jan 22, 2024",
    images: [
      "/placeholder.svg?height=300&width=400&text=Creative+1",
      "/placeholder.svg?height=300&width=400&text=Creative+2",
      "/placeholder.svg?height=300&width=400&text=Creative+3",
    ],
  },
];
