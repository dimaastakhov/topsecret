import { useState } from "react";
import Nav from "../components/nav";
import Container from "../components/container";
import SideBar from "../components/sidebar";
import Hero from "./index/hero";
import Player from "./index/player";
import Image from "next/image";
import Drawer from "../components/bottomSheet";

export default function IndexPage() {
  const [index, setIndex] = useState(0);
  const [showPlayer, setPlayerShow] = useState(false);

  return (
    <div className="bg-black flex min-h-screen md:mr-64  xl:mr-96 z-0">
      <div
        className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden"
      >
        <Image
          alt="background"
          src="/bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {showPlayer && <Player onClose={() => setPlayerShow(false)} />}
      {!showPlayer && (
        <Container>
          <Nav />
          <main className="h-full">
            <Hero onPlayClick={() => setPlayerShow(true)} />
          </main>
          <div className="bg-lightGray hidden md:block sm:w-64 xl:w-96 fixed top-0 right-0 bottom-0">
            <SideBar index={index} setIndex={setIndex} />
          </div>
        </Container>
      )}
      {showPlayer && (
        <div className="bg-lightGray hidden md:block sm:w-64 xl:w-96 fixed top-0 right-0 bottom-0">
          <SideBar index={index} setIndex={setIndex} />
        </div>
      )}
      <Drawer index={index} setIndex={setIndex} />
    </div>
  );
}
