"use client";
import Link from "next/link";
import FeaturedPosts from "../blogs/featured-posts";

export default function PostsSecction() {
  return (
    <section className="mx-2">
      <FeaturedPosts />
      <div className="flex justify-end mt-4">
        <Link
          href="/posts"
          className="font-semibold text-sm underline underline-offset-4 mr-4 text-neutral-900 dark:text-neutral-100"
        >
          All Posts
        </Link>
      </div>
    </section>
  );
}
