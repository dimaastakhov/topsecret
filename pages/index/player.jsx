import Image from "next/image";

export default function Player({ onClose }) {
  return (
    <div className="w-full h-screen z-40 relative">
      <div
        onClick={onClose}
        className="absolute top-4 right-4 hover:cursor-pointer flex items-center"
      >
        <Image
          width="32"
          height="32"
          alt="play"
          src="/close.svg"
          layout="fixed"
          quality={100}
        />
      </div>
      <iframe
        src="https://playercdn.cdnvideo.ru/aloha/players/sovsec2_player.html"
        allow="autoplay; encrypted-media"
        frameborder="0"
        allowfullscreen
        className="w-full h-screen"
      ></iframe>
    </div>
  );
}
