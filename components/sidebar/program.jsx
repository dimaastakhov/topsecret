import React from "react";
import styles from "./styles.module.scss";

export default function Program({ date }) {
  const CSS = `${styles.container} flex flex-col h-full overflow-y-scroll pb-20 xl:pb-24`;
  return (
    <div className={CSS}>
      {Array(10)
        .fill("")
        .map((e, i) => (
          <Item
            key={i}
            time="16:30"
            title="Живая музыка на Дожде"
            description="Тихон Дзядко, Екатерина Котрикадзе, 
Владимир Роменский, Алексей Коростелев"
            isActive={i === 2 ? true : false}
          />
        ))}
    </div>
  );
}

const Item = ({ time, title, description, isActive }) => {
  const activeTimeCSS = "text-white text-xl pr-3 xl:pr-7";
  const baseTimeCSS = `${activeTimeCSS} opacity-20`;
  const activeTitleCSS = "text-white text-sm xl:text-base pb-1";
  const baseTitleCSS = `${activeTitleCSS} opacity-50`;
  const baseDescCSS = "text-white text-xs";
  const activeDescCSS = `${baseDescCSS} opacity-50`;
  const inactiveDescCSS = `${baseDescCSS} opacity-20`;
  const baseContainerCSS = "flex h-24 items-center px-3 xl:px-7 flex-shrink-0";

  const timeCSS = isActive ? activeTimeCSS : baseTimeCSS;
  const titleCSS = isActive ? activeTitleCSS : baseTitleCSS;
  const descCSS = isActive ? activeDescCSS : inactiveDescCSS;
  const containerCSS = isActive
    ? `${baseContainerCSS} bg-lightTabGray`
    : baseContainerCSS;

  return (
    <div className={containerCSS}>
      <div className={timeCSS}>{time}</div>
      <div className="flex flex-col pt-4 pb-4">
        <div className={titleCSS}>{title}</div>
        <div className={descCSS}>{description}</div>
      </div>
    </div>
  );
};
