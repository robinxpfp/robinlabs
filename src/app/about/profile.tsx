import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-full h-auto max-w-[300px] min-w-[250px] min-h-[250px] relative">
      <Image
        className="rounded-sm"
        layout="responsive"
        width={300}
        height={300}
        objectFit="cover"
        alt="PFP"
        src={"/pfp.jpg"}
      />
    </div>
  );
}
