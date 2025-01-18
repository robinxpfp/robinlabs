"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/app/lolo/footer";
import { Nav } from "@/app/lolo/nav";
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
    <div>
      <Nav />

      <main className="container mx-auto px-4 py-10 max-w-xl">
        <div className="mb-4 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="" className="w-32 h-32" />
              <AvatarFallback className="w-32 h-32 text-2xl">
                PFP
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-3xl font-bold mb-2">Robin</h1>
          <Link href="https://x.com/robinxpfp" className="font-medium ">
            <Badge className="rounded-full mb-2 border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800">
              @robinxpfp
            </Badge>
          </Link>
          <p>Frontend Developer especializado en React y Next.js</p>
        </div>

        <div className="mb-10">
          <p className="leading-relaxed text-center">
            Me apasiona crear experiencias web excepcionales y explorar nuevas
            tecnologías. Mi objetivo es construir productos innovadores y nutrir
            conexiones significativas con las diversas comunidades de
            desarrollo.
          </p>
        </div>

        <div className="relative h-32 mb-16">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="absolute text-sm text-gray-600"
              animate={{
                x: Math.sin(index) * 100,
                y: Math.cos(index) * 50,
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
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
  );
}
