import Nav from "@/components/nav";
import { getBlogBySlug, getAllBlogSlug } from "@/app/posts/fetchers";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <main className=" max-w-3xl mx-auto">
      <Nav />
      <article className="prose prose-neutral text-sm mx-auto max-w-2xl md:px-0 px-10">
        {blog.content}
      </article>
    </main>
  );
}
