import { Component } from "react";
import Image from "next/image";

export default class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  setActiveFirst = () =>
    this.setState({
      activeIndex: 0,
    });

  setActiveSecond = () =>
    this.setState({
      activeIndex: 1,
    });

  render() {
    const { activeIndex } = this.state;
    const { toggleModal, isOpen } = this.props;

    const firstTabCss =
      activeIndex === 0
        ? "flex-1 flex justify-center items-center text-blue-600 hover:cursor-pointer border-b-4 border-blue-600 h-full"
        : "flex-1 flex justify-center items-center text-white hover:cursor-pointer border-r border-borderLight h-full";
    const secondTabCss =
      activeIndex === 1
        ? "flex-1 flex justify-center items-center text-blue-600 h-full hover:cursor-pointer border-b-4 border-blue-600"
        : "flex-1 flex justify-center items-center text-white h-full hover:cursor-pointer border-l border-borderLight";
    const openCloseCss = isOpen
      ? "h-full w-16 flex justify-center items-center bg-brightGray hover:cursor-pointer transform rotate-180"
      : "h-full w-16 flex justify-center items-center bg-brightGray hover:cursor-pointer";

    return (
      <div className="bg-lightGray w-full h-16 absolute bottom-3 -top-16 flex items-center rounded-t-xl overflow-hidden">
        <div onClick={this.setActiveFirst} className={firstTabCss}>
          Программа
        </div>
        <div onClick={this.setActiveSecond} className={secondTabCss}>
          Анонсы
        </div>
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
