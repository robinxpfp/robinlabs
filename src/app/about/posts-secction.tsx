"use client";
import Link from "next/link";
import FeaturedPosts from "../posts/featured-posts";

export default function PostsSecction() {
  return (
    <section className="mx-4">
      <div className="font-bold text-lg mt-16 ml-4 mb-2">Features Posts</div>
      <FeaturedPosts />
      <div className="flex justify-end mt-4">
        <Link
          href="/posts"
          className="font-semibold text-sm underline underline-offset-4 mr-4"
        >
          All Posts
        </Link>
      </div>
    </section>
  );
}
