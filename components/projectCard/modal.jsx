import Modal from "react-modal";
import Image from "next/image";
import Item from "./scheduleItem";
import styles from "../sidebar/styles.module.scss";

Modal.setAppElement("#__next");

const CardModal = ({ isOpen, onClose, contents, items }) => {
  return (
  <Modal
    className="absolute bg-borderLight rounded-lg inset-8 max-w-6xl mx-auto"
    overlayClassName="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-30"
    isOpen={isOpen}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    onRequestClose={onClose}
  >
    <div className="w-full relative h-full">
      <div className={`${styles.container} overflow-y-scroll p-7 h-full`}>
        <h2 className="text-3xl text-white">{contents.title}</h2>
        <p className="text-sm leading-6 text-white opacity-50 pt-5">
          {contents.description}
        </p>
        <h4 className="text-xl text-white pt-10">{contents.scheduleTitle}</h4>
        <div className="flex flex-wrap pt-8">
          {items.map((e) => (
            <div className="w-72 pt-3.5 pr-3.5 box-content">
              <Item text={e.when} time={e.time} />
            </div>
          ))}
        </div>
        <div
          onClick={onClose}
          className="absolute top-4 right-4 hover:cursor-pointer flex items-center"
        >
          <Image
            width="32"
            height="32"
            alt="play"
            src="/close.svg"
            layout="fixed"
            quality={100}
          />
        </div>
      </div>
    </div>
  </Modal>
)};

export default CardModal;
