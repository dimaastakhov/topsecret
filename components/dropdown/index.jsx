import { useState } from "react";
import Drop from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import Image from "next/image";

const menuItems = ["one", "two", "three"];

const menu = ({ activeKey, onSelect }) => (
  <Menu activeKey={activeKey} onSelect={onSelect}>
    {menuItems.map((item, ii) => (
      <MenuItem key={ii + 1}>{item}</MenuItem>
    ))}
  </Menu>
);

export default function Dropdown() {
  const [isVisible, setVisible] = useState(false);
  const [activeKey, setActive] = useState("0");

  const onSelect = ({ key }) => key && setActive(key);

  return (
    <Drop
      visible={isVisible}
      onVisibleChange={setVisible}
      trigger={['click']}
      overlay={menu({ activeKey, onSelect })}
      onOverlayClick={() => setVisible(!isVisible)}
      openClassName="bg-borderLight"
      overlayClassName="bg-borderLight rounded"
    >
      <div className="bg-transparent border rounded border-borderLight overflow-hidden relative flex items-center hover:cursor-pointer">
        <input
          className="bg-transparent p-2 text-white opacity-40 text-sm font-main hover:cursor-pointer"
          readOnly
          type="text"
          value={
            Number(activeKey) <= 0 ? "Выберите шоу" : menuItems[activeKey - 1]
          }
        />
        <div className="w-6 -ml-6 pr-2 float-right flex items-center justify-center select-none text-white hover:cursor-pointer text-lg opacity-40">
          <Image
            width="12"
            height="12"
            alt="prev"
            src="/arrow-up.svg"
            layout="fixed"
            className="transform rotate-180"
          />
        </div>
      </div>
    </Drop>
  );
}
