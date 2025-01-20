"use client";

import Link from "next/link";
import React from "react";
import { posts } from "@/lib/featured-posts";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

export default function FeaturedPosts() {
  const pathname = usePathname();

  return (
    <div
      className={`max-w-2xl md:mx-auto ${
        pathname === "/projects" ? "mx-2" : "mx-0"
      }`}
    >
      {" "}
      {posts
        .map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="block  my-2.5 p-4 rounded-2xl transition-colors bg-neutral-100  dark:hover:bg-neutral-800/40  border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                  {item.description}
                </p>
              </div>
              <div>
                <Badge variant="custom">{item.date}</Badge>
              </div>
            </div>
          </Link>
        ))
        .slice(0, pathname === "/" ? 2 : posts.length)}
    </div>
  );
}
