import { Component } from "react";
import Image from "next/image";
import Tabs from "./tabs";

export default class Handle extends Component {
  render() {
    const { toggleModal, isOpen } = this.props;
    const openCloseCss = isOpen
      ? "h-full w-16 flex justify-center items-center bg-brightGray hover:cursor-pointer transform rotate-180"
      : "h-full w-16 flex justify-center items-center bg-brightGray hover:cursor-pointer";

    return (
      <div className="bg-lightGray w-full h-16 absolute bottom-3 -top-16 flex items-center rounded-t-xl overflow-hidden">
        <Tabs />
        <div onClick={toggleModal} className={openCloseCss}>
          <Image
            width="14"
            height="14"
            alt="open modal"
            src="/arrow-up.svg"
            layout="fixed"
          />
        </div>
      </div>
    );
  }
}
