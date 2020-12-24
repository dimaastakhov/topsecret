import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";

export default function Program({ data }) {
  const CSS = `${styles.container} h-full flex-1 overflow-y-scroll pb-20 xl:pb-24`;
  return (
    <div className={CSS}>
      {data.map((e, i) => {
        const now = moment()
        now.utcOffset(3)
        const isLive = now.isBetween(e.start, e.finish)
        return (
          <Item
            key={i}
            time={e.time}
            title={e.title}
            description={e.description}
            isActive={isLive}
          />
        );
      })}
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
  const baseContainerCSS = "flex items-center px-3 xl:px-7 flex-shrink-0";

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
