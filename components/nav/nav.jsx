import Link from "../activeLink";
import Menu from "./links";
import Image from "next/image";
import Social from "./social";

export default function Nav({ inverse, links, toggleModal }) {
  const navCss = inverse
    ? "flex items-center bg-lightGray border-b border-borderLight pb-5 lg:pb-6 xl:pb-10"
    : "flex items-center bg-transparent";
  return (
    <nav className={navCss}>
      <div className="flex-1">
        <ul className="flex items-center justify-between sm:justify-start">
          <li className="leading-0">
            <Link href="/">
              <button className="w-36 h-7 sm:w-44 sm:h-8 relative">
                <Image
                  src="/logo.png"
                  alt="Top Secret Logo"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </button>
            </Link>
          </li>
          <li className="leading-0 sm:hidden">
            <button onClick={toggleModal}>
              <Image
                src="/menu.png"
                alt="Top Secret Menu Icon"
                width={24}
                height={24}
              />
            </button>
          </li>
          <ul className="justify-between items-center sm:ml-7 sm:space-x-7 xl:ml-14 xl:space-x-14 hidden sm:flex">
            <Menu links={links} />
          </ul>
          <li className="ml-auto hidden sm:block">
            <Social wrapClx="flex items-center justify-center" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
