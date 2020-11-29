import Drawer from "rc-drawer";
import Handle from "./handle";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import "rc-drawer/assets/index.css";
import styles from "./index.module.scss";

export default function BottomSheet() {
  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();

  if (!width || width > 768) return null;

  return (
    <>
      <Drawer
        placement="bottom"
        className={styles.drawer}
        open={isOpen}
        handler={
          <Handle isOpen={isOpen} toggleModal={() => setOpen(!isOpen)} />
        }
        height="40vh"
      >
        <button onClick={() => setOpen(false)}>close</button>
      </Drawer>
    </>
  );
}
