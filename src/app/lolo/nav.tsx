import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Nav() {
  const style =
    "border-2 border-b-4  bg-neutral-600 text-white border-neutral-900 hover:bg-neutral-700 hover:text-white active:border-2 active:border-t-4";
  return (
    <nav className="flex justify-end items-center pt-4 px-6 bg-background">
      <div className="space-x-4">
        <Button variant="ghost" className={style} asChild>
          <Link href="/">Inicio</Link>
        </Button>
        <Button variant="ghost" className={style} asChild>
          <Link href="/blog">Blog</Link>
        </Button>
        <Button variant="ghost" className={style} asChild>
          <Link href="/proyectos">Proyectos</Link>
        </Button>
      </div>
    </nav>
  );
}
