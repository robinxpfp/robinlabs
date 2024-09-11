import Nav from "../../components/nav";
import FeaturedProjects from "./featured-projects";

export default async function Page() {
  return (
    <main className=" max-w-3xl py-20 mx-auto md:px-0 px-10">
      <Nav />
      <FeaturedProjects />
    </main>
  );
}
