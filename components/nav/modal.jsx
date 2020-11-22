import Modal from "react-modal";
import Nav from "./nav";
import Container from "../container";
import Menu from "./links";
import Image from "next/image";

Modal.setAppElement("#__next");

export default function NavModal({ isOpen, closeModal, links }) {
  return (
    <Modal
      className="absolute bg-lightGray rounded-b-3xl top-0 right-0 left-0"
      overlayClassName="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-30"
      isOpen={isOpen}
      contentLabel="Example Modal"
    >
      <div className="border border-borderLight">
        <Container>
          <Nav toggleModal={closeModal} />
        </Container>
      </div>

      <ul className="flex flex-col justify-center items-center pt-5 pb-8 ">
        <Menu links={links} inverse />
      </ul>

      <div className="flex items-center justify-center  py-8">
        <div className="mr-2">
          <Image
            width="36"
            height="36"
            alt="facebook"
            src="/fb.svg"
            layout="fixed"
            quality={100}
          />
        </div>
        <div className="mr-2">
          <Image
            width="36"
            height="36"
            alt="instagram"
            src="/insta.svg"
            layout="fixed"
            quality={100}
          />
        </div>
        <div>
          <Image
            width="36"
            height="36"
            alt="linkedin"
            src="/linkedin.svg"
            layout="fixed"
            quality={100}
          />
        </div>
      </div>
    </Modal>
  );
}
