import { useState } from "react";

export default function Tabs({ style }) {
  const [activeIndex, setIndex] = useState(0);

  const borderH =
    style === "side" ? "border-borderBright" : "border-borderLight";
  const activeBorder =
    style === "side" ? "border-borderActive" : "border-blue-600";
  const activeText = style === "side" ? "text-tab" : "text-blue-600";
  const baseCss =
    "flex-1 flex justify-center items-center hover:cursor-pointer h-full";
  const activeTabCss = `${activeText} border-b-4 ${activeBorder}`;
  const defaultTabCss = "text-white";

  const firstTabCss =
    activeIndex === 0
      ? `${baseCss} ${activeTabCss}`
      : `${baseCss} ${defaultTabCss} border-r ${borderH}`;
  const secondTabCss =
    activeIndex === 1
      ? `${baseCss} ${activeTabCss}`
      : `${baseCss} ${defaultTabCss} border-l ${borderH}`;

  return (
    <div className="flex-1 w-full h-full flex justify-center items-center ">
      <div onClick={() => setIndex(0)} className={firstTabCss}>
        Программа
      </div>
      <div onClick={() => setIndex(1)} className={secondTabCss}>
        Анонсы
      </div>
    </div>
  );
}
