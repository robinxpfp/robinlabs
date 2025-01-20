import Link from "next/link";
import { getBlogs } from "./fetchers";
import Nav from "@/components/nav";
import { Metadata } from "next";
// import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Robin - Blog",
  description: "A collection of my thoughts",
};

//fix design
export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="min-h-screen md:p-0 py-2 px-4">
      <main className="max-w-2xl mx-auto">
        <Nav />
        <h1 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">
          Posts
        </h1>
        <ul className="space-y-6">
          {blogs.map((blog, i) => (
            <li key={i} className="border-l-2 border-black pl-4">
              <Link
                href={`/posts/${blog.slug}`}
                className="block hover:opacity-50  transition-colors p-2"
              >
                <h2 className="text-xl font-bold">{blog.frontmatter.title}</h2>
                <p className="text-sm font-mono mt-1">
                  {blog.frontmatter.publishDate}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        {/* {blogs.map((blog, i) => (
        <article key={i}>
          <div className="block md:my-2.5 my-8 rounded-xl md:text-base text-sm transition-all duration-300 md:hover:bg-neutral-100 md:hover:dark:bg-neutral-800/40  md:p-4 px-10 max-w-2xl mx-auto">
            <div className="flex justify-between">
              <div className="w-full">
                <Link
                  href={`/posts/${blog.slug}`}
                  className="text-neutral-700 dark:text-neutral-200 flex flex-col md:flex-row md:justify-between md:text-base text-sm md:items-end"
                >
                  <div className="flex flex-col">
                    <div className="font-bold">{blog.frontmatter.title}</div>
                    <div className="max-w-max text-muted-foreground font-medium md:text-sm text-xs md:mb-0 mb-2">
                      {blog.frontmatter.description.slice(0, 80)}...
                    </div>
                  </div>
                  <div className="md:text-sm text-xs font-bold">
                    {blog.frontmatter.publishDate}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))} */}
      </main>
    </div>
  );
}
