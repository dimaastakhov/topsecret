import { useState } from "react";
import Tabs, { TabPane } from "rc-tabs";
import Image from "next/image";
import Program from "./program";

const WEEK_DAYS = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

function DayPicker({ days }) {
  const [active, setActive] = useState(1);

  const onNext = () => setActive(Math.min(days.length, active + 1));
  const onPrev = () => setActive(Math.max(1, active - 1));

  return (
    <div className="flex flex-1 h-full">
      <Tabs
        defaultActiveKey="1"
        activeKey={String(active)}
        tabBarExtraContent={{
          left: <Left action={onPrev} />,
          right: <Right action={onNext} />,
        }}
        onChange={(key) => setActive(Number(key))}
      >
        {days.map((day, i) => (
          <TabPane
            tab={<Tab monthDate={day.monthDate} weekDay={day.weekDay} />}
            key={i + 1}
          >
            <Program data={day.programm} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

const Tab = ({ monthDate, weekDay }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="text-white opacity-40 text-sm">{WEEK_DAYS[weekDay]}</div>
    <div className="text-white text-2xl">{monthDate}</div>
  </div>
);

const Left = ({ action }) => (
  <div
    onClick={action}
    className="flex items-center justify-center select-none text-white hover:cursor-pointer text-lg"
  >
    <Image
      width="24"
      height="24"
      alt="prev"
      src="/arrow-up.svg"
      layout="fixed"
      className="transform -rotate-90"
    />
  </div>
);

const Right = ({ action }) => (
  <div
    onClick={action}
    className="flex items-center justify-center select-none text-white hover:cursor-pointer text-lg"
  >
    <Image
      width="24"
      height="24"
      alt="next"
      src="/arrow-up.svg"
      layout="fixed"
      className="transform rotate-90"
    />
  </div>
);

export default DayPicker;
