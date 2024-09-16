import WorkInProgress from "./work-in-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts - Robin",
};

export default async function Page() {
  return (
    <main className=" max-w-3xl py-20 mx-auto md:px-0 px-10">
      <WorkInProgress />
    </main>
  );
}
