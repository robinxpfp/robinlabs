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
            className="block my-2.5 p-4 rounded-xl md:text-base text-sm transition-all duration-300 md:hover:bg-neutral-100 md:dark:hover:bg-neutral-800/40 max-w-2xl mx-auto"
          >
            <div className="flex justify-between">
              <Link
                href={item.url}
                className="text-neutral-700 dark:text-neutral-200 md:text-base text-sm flex-grow"
              >
                {item.title}
              </Link>
              <Badge variant="custom" className="ml-4">
                {item.date}
              </Badge>
            </div>
          </div>
        ))
        .slice(0, pathname === "/" ? 1 : posts.length)}
    </div>
  );
}
