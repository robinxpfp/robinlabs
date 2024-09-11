import Nav from "../about/nav";
import { Metadata } from "next";
import WorkInProgress from "./work-in-progress";

// export const metadata: Metadata = {
//   title: "",
//   description: "",
// };

export default async function Page() {
  return (
    <main className=" max-w-3xl py-20 mx-auto md:px-0 px-10">
      {/* <Nav />
      Blog */}
      <WorkInProgress />
    </main>
  );
}
