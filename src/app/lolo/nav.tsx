import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <nav className="flex justify-end items-center pt-4 px-6 bg-background">
      <div className="space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/">Inicio</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/blog">Blog</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/proyectos">Proyectos</Link>
        </Button>
      </div>
    </nav>
  );
}
