import Link from "next/link";
import { getBlogs } from "./fetchers";
import Nav from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robin - Blog",
  description: "A collection of my thoughts",
};

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="min-h-screen md:p-0 py-2 px-4">
      <main className="max-w-2xl mx-auto">
        <Nav />
        <h1 className="text-3xl font-bold my-6 border-b-2 border-black text-black">
          All Posts
        </h1>
        <ul className="space-y-6">
          {blogs.map((blog, i) => (
            <li key={i} className="group">
              <Link
                href={`/posts/${blog.slug}`}
                className="block border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                           hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none 
                           transition-all rounded-none "
              >
                <h2 className="text-xl font-bold text-black group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                  {blog.frontmatter.title}
                </h2>
                <p className="text-sm font-mono mt-1 text-black">
                  {blog.frontmatter.publishDate}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
