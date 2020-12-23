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
        src="https://frontend.vh.yandex.ru/player/49c6a5763e8525908a293c086aea3ba1?from=partner&autoplay=1&tv=0&play_on_visible=false"
        allow="autoplay; encrypted-media"
        frameborder="0"
        allowfullscreen
        className="w-full h-screen"
      ></iframe>
    </div>
  );
}
