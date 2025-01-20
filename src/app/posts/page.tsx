import Link from "next/link";
import { getBlogs } from "./fetchers";
import Nav from "@/components/nav";
import { Metadata } from "next";
// import { Badge } from "@/components/ui/badge";

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
        <h1 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2 text-black">
          Posts
        </h1>
        <ul className="space-y-6">
          {blogs.map((blog, i) => (
            <li key={i} className="border-l-2 border-black pl-4">
              <Link
                href={`/posts/${blog.slug}`}
                className="block hover:opacity-50  transition-colors p-2"
              >
                <h2 className="text-xl font-bold text-black">
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
