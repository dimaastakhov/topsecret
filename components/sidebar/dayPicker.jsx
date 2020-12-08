import { useState } from "react";
import Tabs, { TabPane } from "rc-tabs";
import Image from "next/image";
import Program from './program'

export default function DayPicker() {
  const [active, setActive] = useState(1);

  const panes = [
    { name: "tab 1", content: "first", key: "1" },
    { name: "tab 2", content: "second", key: "2" },
    { name: "tab 3", content: "third", key: "3" },
    { name: "tab 4", content: "first", key: "4" },
    { name: "tab 5", content: "second", key: "5" },
    { name: "tab 6", content: "third", key: "6" },
    { name: "tab 7", content: "first", key: "7" },
    { name: "tab 8", content: "second", key: "8" },
    { name: "tab 9", content: "third", key: "9" },
    { name: "tab 10", content: "first", key: "10" },
    { name: "tab 11", content: "second", key: "11" },
    { name: "tab 12", content: "third", key: "12" },
  ];

  const onNext = () => setActive(Math.min(panes.length, active + 1));
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
        {panes.map(({ name, content, key }) => (
          <TabPane tab={<Tab name={name} />} key={key}>
            <Program />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

const Tab = ({ name }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="text-white opacity-40 text-sm">вт</div>
    <div className="text-white text-2xl">06</div>
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
