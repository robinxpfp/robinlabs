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
    <div className="min-h-screen md:p-0 py-2 px-4">
      <main className="max-w-2xl mx-auto">
        <Nav />
        <article className="prose prose-neutral text-sm mx-auto p-4">
          {blog.content}
        </article>
      </main>
    </div>
  );
}
