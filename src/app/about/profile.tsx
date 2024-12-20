import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-full h-auto max-w-[300px] min-w-[250px] min-h-[250px] relative">
      <div className="rounded-full overflow-hidden shadow-[0_8px_30px_15px_hsl(var(--primary)_/_0.15)] dark:shadow-[0_8px_30px_15px_hsl(var(--background)_/_0.25)]">
        <Image
          className="rounded-full"
          // className="rounded-full shadow-2xl"
          // className="rounded-sm"
          layout="responsive"
          width={300}
          height={300}
          objectFit="cover"
          alt="PFP"
          src={"/pfp.jpg"}
        />
        <div className="absolute bottom-2 -right-2 bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-extrabold">Open to work</span>
        </div>
      </div>
    </div>
  );
}
