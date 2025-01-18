import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "./post-type";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-medium tracking-tight text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-500">{post.description}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <time className="text-sm text-gray-500">{post.publishedAt}</time>
            <Link
              href="#"
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              Read more →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
