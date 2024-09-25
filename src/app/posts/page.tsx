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
    <main className=" max-w-3xl mx-auto">
      <Nav />
      {blogs.map((blog, i) => (
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
                    {/* <div className="max-w-max text-muted-foreground font-medium text-sm"> */}
                    <div className="max-w-max text-muted-foreground font-medium md:text-sm text-xs">
                      {blog.frontmatter.description.slice(0, 80)}...
                    </div>
                  </div>
                  <div className="md:text-sm text-xs font-bold">
                    {blog.frontmatter.publishDate}
                  </div>
                  {/* 
                  <Badge variant="custom" className="container">
                    {blog.frontmatter.publishDate}
                  </Badge> */}
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
