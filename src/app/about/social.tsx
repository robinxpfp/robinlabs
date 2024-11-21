import { CONFIG } from "@/config";

export default function Social() {
  return (
    <div className="flex justify-start items-center space-x-3">
      {CONFIG.socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 mb-2"
        >
          <div className="w-8 h-8">{social.icon}</div>
          {/* <span className="text-sm text-secondary">{social.platform}</span>s */}
        </a>
      ))}
    </div>
  );
}
