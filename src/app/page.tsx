import { Profile } from "@/app/about/profile";
import { About } from "@/app/about/about";
import { Content } from "@/app/about/content";
// import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="max-w-3xl  flex flex-col justify-center  py-10 mx-auto relative">
      {/* <WorkInProgressBanner /> */}
      {/* <Nav /> */}
      <Profile />
      <About />

      <Content />
    </div>
  );
}
