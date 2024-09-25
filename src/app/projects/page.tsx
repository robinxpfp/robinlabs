import Nav from "../../components/nav";
import FeaturedProjects from "./featured-projects";

export default async function Page() {
  return (
    <main className="max-w-3xl mx-auto">
      <Nav />
      <FeaturedProjects />
    </main>
  );
}
