import Nav from "../../components/nav";
import FeaturedProjects from "./featured-projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Robin",
  // description: "...",
};

export default async function Page() {
  return (
    <main className="max-w-3xl py-20 mx-auto">
      <Nav />
      <FeaturedProjects />
    </main>
  );
}
