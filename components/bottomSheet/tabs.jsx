import { useState } from "react";

export default function Tabs({ style, index, onToggle }) {
  const [activeIndex, setIndex] = useState(0);

  let active = index === undefined ? activeIndex : index
  let setActive = onToggle === undefined ? setIndex : onToggle

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
    active === 0
      ? `${baseCss} ${activeTabCss}`
      : `${baseCss} ${defaultTabCss} border-r ${borderH}`;
  const secondTabCss =
    active === 1
      ? `${baseCss} ${activeTabCss}`
      : `${baseCss} ${defaultTabCss} border-l ${borderH}`;

  return (
    <div className="flex-1 w-full h-full flex justify-center items-center ">
      <div onClick={() => setActive(0)} className={firstTabCss}>
        Программа
      </div>
      <div onClick={() => setActive(1)} className={secondTabCss}>
        Анонсы
      </div>
    </div>
  );
}
