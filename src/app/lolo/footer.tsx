import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 bg-background">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
      {/* <p className="text-center mt-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Robin. Todos los derechos reservados.
      </p> */}
    </footer>
  );
}
