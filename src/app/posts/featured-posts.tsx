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
            className="block my-2.5 p-4 rounded-xl md:text-base text-sm transition-all duration-300"
          >
            <div className="flex justify-between">
              <div className="w-full">
                <Link
                  href={item.url}
                  className=" text-neutral-700 dark:text-neutral-200 flex justify-between md:text-base text-sm"
                >
                  <div>{item.title}</div>
                  <Badge variant="custom">{item.date}</Badge>
                </Link>
              </div>
            </div>
          </div>
        ))
        .slice(0, pathname === "/" ? 1 : posts.length)}
    </div>
  );
}
