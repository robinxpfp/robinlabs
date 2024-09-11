"use client";

import Link from "next/link";
import React from "react";
import { posts } from "@/lib/featured-posts";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

export default function FeaturedPosts() {
  const pathname = usePathname();

  return (
    <div>
      {posts
        .map((item, index) => (
          <div
            key={index}
            className="hover:bg-neutral-900 bg-neutral-900/70 my-2 p-4 rounded-xl transition-all duration-300 "
          >
            <div className="flex justify-between">
              <div className="w-full">
                <Link
                  href={item.url}
                  className=" text-white flex justify-between md:text-base text-sm"
                >
                  <div>{item.title}</div>
                  <Badge>{item.date}</Badge>
                </Link>
              </div>
            </div>
          </div>
        ))
        .slice(0, pathname === "/" ? 1 : posts.length)}
    </div>
  );
}
