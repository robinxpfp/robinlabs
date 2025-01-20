"use client";

import { posts } from "@/app/bobo-post/post";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Nav from "@/components/nav";
// import { Nav } from "../nav";

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
      {/* <Nav /> */}
      <Nav />
      <main className="mx-auto max-w-4xl p-4 min-h-screen flex items-center flex-col justify-center">
        {/* Desktop View */}
        <div className="relative mb-16 h-[200px] w-full md:block hidden">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-[-2rem]">
            {currentPost.images.map((image, index) => (
              <div
                key={`${currentPost.id}-${index}`}
                className="relative h-[200px] w-[300px] overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-500"
                style={{
                  transform: `rotate(${index * 2 - 3}deg)`,
                  marginLeft: index === 0 ? "0" : "-2rem",
                  zIndex: 3 - index,
                }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${currentPost.title} - Image ${index + 1}`}
                  height={96}
                  width={96}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previousPost}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 transition-all border-2 border-black bg-white hover:bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextPost}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 transition-all border-2 border-black bg-white hover:bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
            aria-label="Next post"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        {/* Post Details */}
        <div className="mx-auto max-w-2xl">
          <div className="mb-4">
            <div className="mb-6">
              <h3 className="text-sm font-semibold">Title</h3>
              <p className="text-lg">{currentPost.title}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold">Description</h3>
              <p className="text-lg">{currentPost.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold">Published</h3>
              <p className="text-lg">{currentPost.publishedAt}</p>
            </div>
          </div>

          <button className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all border-2 border-black bg-white hover:bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none mb-10">
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
              <div className="relative h-[200px] w-full overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={post.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${post.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => previousImage(postIndex)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 transition-all border-2 border-black bg-white hover:bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => nextImage(postIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 transition-all border-2 border-black bg-white hover:bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Title</h3>
                <p className="text-lg">{post.title}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Description</h3>
                <p className="text-lg">{post.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Published</h3>
                <p className="text-lg">{post.publishedAt}</p>
              </div>

              <button className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all border-2 border-black bg-white hover:bg-neutral-100 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none mb-10">
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
