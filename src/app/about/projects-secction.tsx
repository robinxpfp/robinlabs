"use client";

import FeaturedProjects from "../projects/featured-projects";
import Link from "next/link";

export default function ProjectsSecction() {
  return (
    <section className="mx-4">
      <FeaturedProjects />
      <div className="flex justify-end mt-4">
        <Link
          href="/projects"
          className="font-semibold text-sm underline underline-offset-4 mr-4 text-neutral-900 dark:text-neutral-100"
        >
          All Project
        </Link>
      </div>
    </section>
  );
}
