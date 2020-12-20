import Image from "next/image";

export default function Play({ label, size = "24", isBlue }) {
  const img = isBlue ? '/play-blue.svg' : '/play.svg'
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
      <Image
        width={size}
        height={size}
        alt="play"
        src={img}
        layout="fixed"
        quality={100}
      />
      {label && <div className="ml-1 lg:hidden text-gray-800">{label}</div>}
    </div>
  );
}
