import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <Button size="icon" className="bg-white text-black">
        <Link href="https://x.com/robinxpfp">
          <TwitterLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button size="icon" className="bg-white text-black">
        <Link href="https://instagram.com/robinxpfp">
          <InstagramLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button size="icon" className="bg-white text-black ">
        <Link href="https://www.linkedin.com/in/sauldev">
          <LinkedInLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button size="icon" className="bg-white text-black ">
        <Link href="https://github.com/robinxpfp">
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
      </Button>
      <Button disabled={true} size="icon" className="bg-white text-black">
        <VideoIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
