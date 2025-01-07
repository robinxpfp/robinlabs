import { CONFIG } from "@/config";

export function Social() {
  return (
    <div className="flex justify-start items-center gap-2">
      {CONFIG.socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center  mb-2 opacity-65 hover:opacity-100"
        >
          <div className="w-6 h-6">{social.icon}</div>
        </a>
      ))}
    </div>
  );
}
