import Drawer from "rc-drawer";
import Handle from "./handle";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Anouncements from "../sidebar/anouncements";
import Schedule from "../sidebar/schedule";
import "rc-drawer/assets/index.css";
import styles from "./index.module.scss";

export default function BottomSheet({ index, setIndex }) {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();

  if (!width || width >= 768) return null;

  return (
    <>
      <Drawer
        placement="bottom"
        className={styles.drawer}
        open={isOpen}
        handler={
          <Handle
            index={index}
            setIndex={setIndex}
            isOpen={isOpen}
            toggleModal={() => setOpen(!isOpen)}
          />
        }
        height="80vh"
      >
        <div className="flex flex-col h-full border-none bg-lightTabGray">
          {index === 0 && <Schedule />}
          {index !== 0 && <Anouncements />}
        </div>
      </Drawer>
    </>
  );
}
