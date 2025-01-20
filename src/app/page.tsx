"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/app/about/footer";
import { Nav } from "@/app/about/nav";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const skills = [
    "Frontend",
    "UX/UI",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
  ];

  return (
    <div className="min-h-screen md:p-0 py-2 px-4">
      <div className="max-w-2xl mx-auto">
        <Nav />

        <main className="container mx-auto px-4 max-w-xl text-black">
          <div className="mb-4 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Avatar className="w-32 h-32 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <AvatarImage src="" className="w-32 h-32" />
                <AvatarFallback className="w-32 h-32 text-2xl bg-white">
                  PFP
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-3xl font-bold mb-2">Robin</h1>
            <Link href="https://x.com/robinxpfp" className="font-medium">
              <Badge className="rounded-none border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all hover:bg-transparent">
                @robinxpfp
              </Badge>
            </Link>
            <p className="mt-2">Developer & Creator</p>
          </div>

          <div className="mb-10">
            <p className="leading-relaxed text-center">
              I’m living online, always connected and creating. I specialize in
              web development, focusing on front-end experiences and designs.
              I’m also passionate about robotics and combining creativity with
              technology.
            </p>
          </div>

          <div className="relative h-32 mb-16">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="absolute text-sm border-2 border-black bg-white px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                animate={{
                  x: Math.sin(index) * 100,
                  y: Math.cos(index) * 50,
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
