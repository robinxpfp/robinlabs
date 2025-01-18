"use client";

import { posts } from "./post";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Nav } from "../lolo/nav";

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPost = posts[currentIndex];

  const nextImage = (postIndex: number) => {
    setCurrentImageIndex((prev) => (prev + 1) % posts[postIndex].images.length);
  };

  const previousImage = (postIndex: number) => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + posts[postIndex].images.length) %
        posts[postIndex].images.length
    );
  };

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const previousPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <div>
      <Nav />

      <main className="mx-auto max-w-6xl px-4 pt-8">
        {/* Desktop View */}
        <div className="relative mb-16 h-[300px] w-full md:block hidden">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full  p-2 shadow-md transition-all  mb-2 border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800 hover:bg-neutral-700"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextPost}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full  p-2 shadow-md transition-all  mb-2 border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800 hover:bg-neutral-700"
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

          <button className="inline-flex items-center px-4 py-2 text-sm font-medium  shadow-sm transition-all rounded-full border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800 hover:bg-neutral-700 text-white mb-10">
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
        {/* Mobile View */}
        <div className="md:hidden space-y-16">
          {posts.map((post, postIndex) => (
            <div key={`mobile-${post.id}`} className="space-y-4">
              <div className="relative h-[200px] w-full overflow-hidden rounded-2xl">
                <Image
                  // {post.images[currentImageIndex[postIndex]]
                  src={post.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${post.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => previousImage(postIndex)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full   shadow-md transition-all text-white border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800 hover:bg-neutral-700"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => nextImage(postIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full  p-2 shadow-md transition-all mb-2 border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800 hover:bg-neutral-700"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Title</h3>
                <p className="text-lg text-gray-600">{post.title}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">
                  Description
                </h3>
                <p className="text-lg text-gray-600">{post.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-900">Published</h3>
                <p className="text-lg text-gray-600">{post.publishedAt}</p>
              </div>

              <button className="inline-flex items-center  px-4 py-2 text-sm font-medium text-gray-900 shadow-md transition-all  rounded-full border-2 border-b-4 active:border-2 active:border-t-4 bg-neutral-600 border-neutral-800 hover:bg-neutral-700 mb-10">
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
          ))}
        </div>
      </main>
    </div>
  );
}
