"use client";

import Link from "next/link";
import { projects } from "@/lib/featured-projects";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

export default function FeaturedProjects() {
  const pathname = usePathname();

  return (
    <div
      className={`max-w-3xl md:mx-auto ${
        pathname === "/projects" ? "mx-2" : "mx-0"
      }`}
    >
      {projects
        .map((item) => (
          <Link
            key={item.id}
            href={item.url}
            passHref
            className="block my-2.5 p-4 rounded-xl md:text-base text-sm transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
          >
            <div>
              <div className="font-semibold text-neutral-900 dark:text-neutral-200 ">
                {item.title}
              </div>
              <div className="opacity-85 text-neutral-700 dark:text-neutral-200/70">
                {item.descripcion}
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              {item.tools.map((tool, i) => (
                <Badge variant="custom" key={i}>
                  {tool}
                </Badge>
              ))}
            </div>
          </Link>
        ))
        .slice(0, pathname === "/" ? 2 : projects.length)}
    </div>
  );
}
