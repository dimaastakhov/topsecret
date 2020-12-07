import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./modal";

export default function Card({ title }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(true)}
      className="w-full h-full overflow-hidden rounded relative hover:cursor-pointer opacity-90 hover:opacity-100"
    >
      <Image
        alt="project cover"
        src="/tv-cover.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute bottom-7 left-7">
        <h3 className="text-white text-1.5xl w-60">{title}</h3>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={(e) => {
          setOpen(false);
          e && e.stopPropagation();
        }}
      />
    </div>
  );
}
