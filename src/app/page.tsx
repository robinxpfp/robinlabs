import Nav from "@/components/nav";
import Profile from "./about/profile";
import About from "./about/about";
import Social from "./about/social";
import ProjectsSecction from "./about/projects-secction";
import PostsSecction from "./about/posts-secction";
import WorkInProgressBanner from "@/components/workIn-progress-banner";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center min-h-screen mb-20 ">
      <WorkInProgressBanner />
      <Nav />
      <div className="flex sm:flex-col flex-col-reverse justify-center  sm:items-end items-center my-12 max-w-xl sm:mx-auto mx-5 sm:-space-y-32">
        <div className="flex justify-start items-start">
          <Profile />
        </div>
        <div className="flex flex-col sm:justify-start sm:items-start  space-y-6 justify-center items-start sm:mb-0 mb-6">
          <About />
          <Social />
        </div>
      </div>
      <ProjectsSecction />
      <PostsSecction />
    </div>
  );
}
