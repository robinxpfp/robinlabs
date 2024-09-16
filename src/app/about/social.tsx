import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

type Social = {
  size: string;
  className: string;
  arial_Label: string;
};

export default function Social() {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 dark:bg-neutral-700/70 
         dark:text-neutral-50"
        aria-label="Twitter"
      >
        <Link href="https://x.com/robinxpfp" aria-label="Twitter">
          <TwitterLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 dark:bg-neutral-700/70 
         dark:text-neutral-50"
        aria-label="Instagram"
      >
        <Link href="https://instagram.com/robinxpfp" aria-label="Instagram">
          <InstagramLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 dark:bg-neutral-700/70 
         dark:text-neutral-50"
        aria-label="LinkedIn"
      >
        <Link href="https://www.linkedin.com/in/sauldev" aria-label="LinkedIn">
          <LinkedInLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 dark:bg-neutral-700/70 
         dark:text-neutral-50"
        aria-label="GitHub"
      >
        <Link href="https://github.com/robinxpfp" aria-label="GitHub">
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
    </div>
  );
}
