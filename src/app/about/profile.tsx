import Image from "next/image";

export default function Profile() {
  return (
    <div>
      {/* <div className="w-full max-w-xs mx-auto"></div> */}
      <Image
        className="rounded-sm"
        width={300}
        height={300}
        alt="PFP"
        // src={"/pfp-v.jpg"}
        // src={"/pfp.png"}
      />
    </div>
  );
}
