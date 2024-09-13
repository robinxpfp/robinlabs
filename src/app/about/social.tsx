import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 border-neutral-900 
        dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-50 border hover:bg-neutral-100 dark:hover:bg-neutral-900"
        aria-label="Twitter"
      >
        <Link href="https://x.com/robinxpfp" aria-label="Twitter">
          <TwitterLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 border-neutral-900 
        dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-50 border hover:bg-neutral-100 dark:hover:bg-neutral-900"
        aria-label="Instagram"
      >
        <Link href="https://instagram.com/robinxpfp" aria-label="Instagram">
          <InstagramLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 border-neutral-900 
        dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-50 border hover:bg-neutral-100 dark:hover:bg-neutral-900"
        aria-label="LinkedIn"
      >
        <Link href="https://www.linkedin.com/in/sauldev" aria-label="LinkedIn">
          <LinkedInLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button
        size="icon"
        className="bg-neutral-100 text-neutral-900 border-neutral-900 
        dark:bg-neutral-900 dark:text-neutral-50 dark:border-neutral-50 border hover:bg-neutral-100 dark:hover:bg-neutral-900"
        aria-label="GitHub"
      >
        <Link href="https://github.com/robinxpfp" aria-label="GitHub">
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
    </div>
  );
}
