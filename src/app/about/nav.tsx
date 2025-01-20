import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <div className="flex justify-start items-center py-4">
      <Button
        variant="ghost"
        className="border-2 border-black bg-white hover:bg-neutral-100 active:bg-neutral-200 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all rounded-none hover:text-black"
        asChild
      >
        <Link href={"posts"}>Posts</Link>
      </Button>
      <Button
        variant="ghost"
        className="border-2 border-black bg-white hover:bg-neutral-100 active:bg-neutral-200 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all rounded-none hover:text-black"
        disabled={true}
        // asChild
      >
        Projects
        {/* <Link href={"projects"}>Projects</Link> */}
      </Button>
    </div>
  );
}
