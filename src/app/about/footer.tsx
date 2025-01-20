import { CONFIG } from "@/config";

export function Footer() {
  return (
    <footer className="px-6 bg-background">
      <div className="flex justify-center space-x-6">
        {CONFIG.socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black p-2 bg-white hover:bg-neutral-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          >
            <div className="w-6 h-6">{social.icon}</div>
          </a>
        ))}
      </div>
    </footer>
  );
}
