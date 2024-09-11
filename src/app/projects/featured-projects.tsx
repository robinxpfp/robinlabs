import Link from "next/link";
import React from "react";
import { projects } from "@/lib/featured-projects";
import { Badge } from "@/components/ui/badge";

export default function FeaturedProjects() {
  return (
    <div>
      {projects.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          passHref
          className="block bg-neutral-900/70 my-2.5 p-4 rounded-xl md:text-base text-sm transition-all duration-300 hover:bg-neutral-900"
        >
          <div>
            <div className="font-semibold text-white">{item.title}</div>
            <div>{item.descripcion}</div>
          </div>

          <div className="mt-4 flex space-x-2">
            {item.tools.map((tool, i) => (
              <Badge key={i}>{tool}</Badge>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
