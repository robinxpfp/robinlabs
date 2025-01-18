"use client";

import { posts } from "./post";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPost = posts[currentIndex];

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const previousPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <header className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-normal text-gray-600">
            Logan Liffick
          </Link>
          <nav className="flex gap-8">
            <Link href="/blog" className="text-gray-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-8">
        {/* Overlapping Images with Navigation */}
        <div className="relative mb-16 h-[300px] w-full">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-[-2rem]">
            {currentPost.images.map((image, index) => (
              <div
                key={`${currentPost.id}-${index}`}
                className="relative h-[200px] w-[300px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500"
                style={{
                  transform: `rotate(${index * 2 - 3}deg)`,
                  marginLeft: index === 0 ? "0" : "-2rem",
                  zIndex: 3 - index,
                }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${currentPost.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previousPost}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextPost}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50"
            aria-label="Next post"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Post Details */}
        <div className="mx-auto max-w-2xl">
          <div className="mb-4">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900">Title</h3>
              <p className="text-lg text-gray-600">{currentPost.title}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="text-lg text-gray-600">{currentPost.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900">Published</h3>
              <p className="text-lg text-gray-600">{currentPost.publishedAt}</p>
            </div>
          </div>

          <button className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50">
            Read more
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
