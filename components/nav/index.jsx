import { useState } from "react";
import Modal from "./modal";
import Nav from "./nav";

const links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/projects", label: "Проекты" },
  { href: "/archive", label: "Архив" },
];

export default function Navbar({ inverse }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Nav
        inverse={inverse}
        links={links}
        toggleModal={() => setOpen(!isOpen)}
      />
      <Modal isOpen={isOpen} closeModal={() => setOpen(false)} links={links} />
    </>
  );
}
