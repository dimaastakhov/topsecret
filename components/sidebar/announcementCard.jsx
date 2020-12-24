import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function AnnouncementCard({ ann }) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-36 relative rounded-lg overflow-hidden">
        <Image
          alt="card"
          src={`${BASE_URL}${ann.image.url}`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <p className="text-tab text-sm font-bold pt-3">{ann.tag || ""}</p>
      <p className="text-white text-lg pt-3.5">{ann.title}</p>
      <p className="text-tabTextDark text-xs pt-1">{ann.description}</p>
    </div>
  );
}
