import Image from "next/image";

export default function Play({ label }) {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
      <Image
        width="24"
        height="24"
        alt="play"
        src="/play.svg"
        layout="fixed"
        quality={100}
      />
      <div className="ml-1 lg:hidden text-gray-800">
        {label}
      </div>
    </div>
  );
}
