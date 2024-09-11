import Social from "./social";
import About from "./about";
import Profile from "./profile";
import Nav from "./nav";
import ProjectjsSecction from "./projectjs-secction";
import PostsSecction from "./posts-secction";
import Footer from "./footer";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center min-h-screen mb-20">
      <Nav />
      <div className="flex sm:flex-col flex-col-reverse justify-center  sm:items-end items-center my-12 max-w-xl sm:mx-auto mx-5 sm:-space-y-20">
        <div className="flex justify-start items-start">
          <Profile />
        </div>
        <div className="flex flex-col sm:justify-start sm:items-start  space-y-6 justify-center items-start sm:mb-0 mb-6">
          <About />
          <Social />
        </div>
      </div>
      <ProjectjsSecction />
      <PostsSecction />
      <Footer />
    </div>
  );
}
