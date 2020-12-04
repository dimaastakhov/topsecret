import React from "react";

export default function Button({ text, defaultClx, clx }) {
  const CSS = defaultClx
    ? defaultClx
    : `flex items-center justify-center bg-primary text-white text-sm h-full w-full rounded-md shadow-2xl ${clx}`;

  return <button className={CSS}>{text}</button>;
}
