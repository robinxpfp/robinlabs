"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Footer } from "@/app/about/footer";
import { Nav } from "@/app/about/nav";
import { Badge } from "@/components/ui/badge";
import { Skills } from "@/app/about/skills";

export default function Home() {
  return (
    <div className="min-h-screen md:p-0 py-2 px-4">
      <div className="max-w-2xl mx-auto">
        <Nav />
        <main className="container mx-auto px-4 max-w-xl text-black">
          <div className="mb-4 text-center">
            <div className="relative w-32 h-32 mx-auto my-6">
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
            <p className="mt-2">Software Developer & Creator</p>
          </div>
          <div className="mb-10">
            <p className="leading-relaxed text-center">
              Software developer, dedicated to creating accessible and
              user-centered digital products. Passionate about crafting
              high-quality software solutions and seeking new opportunities in
              the field.
            </p>
          </div>
          <Skills />
          <Footer />
        </main>
      </div>
    </div>
  );
}
