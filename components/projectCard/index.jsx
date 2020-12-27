import { useState } from "react";
import Image from "next/image";
import Modal from "./modal";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function Card({
  title,
  onClick,
  cover,
  contents,
  items,
  cover_url,
}) {
  const [isOpen, setOpen] = useState(false);

  const trigger = (v) => {
    if (onClick) return onClick();

    return setOpen(v);
  };

  return (
    <div
      onClick={() => trigger(true)}
      className="w-full h-full overflow-hidden rounded relative hover:cursor-pointer opacity-90 hover:opacity-100"
    >
      {cover && (
        <Image
          alt="project cover"
          src={`${BASE_URL}${cover.url}`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      )}
      {cover_url && <img src={cover_url} className="absolute inset-0 object-cover w-full h-full hover:cursor-pointer" />}
      <div className="absolute bottom-7 left-7">
        <h3 className="text-white text-1.5xl w-60">{title}</h3>
      </div>

      {contents && (
        <Modal
          isOpen={isOpen}
          contents={contents}
          items={items}
          onClose={(e) => {
            setOpen(false);
            e && e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}
