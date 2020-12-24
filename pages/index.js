import { useState } from "react";
import Nav from "../components/nav";
import Container from "../components/container";
import SideBar from "../components/sidebar";
import Hero from "./index/hero";
import Player from "./index/player";
import Image from "next/image";
import Drawer from "../components/bottomSheet";
import useSWR from "swr";
import moment from "moment";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function IndexPage() {
  const [index, setIndex] = useState(0);
  const [showPlayer, setPlayerShow] = useState(false);
  const { data } = useSWR("/api/schedule", fetcher, {
    refreshInterval: 1000 * 60 * 10, // 10 min refresh interval
  });

  const days = data ? data.days : [];
  // let today = days.filter((day) =>
  //   moment(day.fullDate).isSame(moment(), "day")
  // )[0];
  // const live =
  //   today &&
  //   today.programm.filter((p) =>
  //     moment().utcOffset(3).isBetween(p.start, p.finish)
  //   )[0];

  const live = days.length && days[0].programm[0]

  return (
    <div className="bg-black flex min-h-screen md:mr-64  xl:mr-96 z-0">
      <div className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
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
            <Hero onPlayClick={() => setPlayerShow(true)} live={live} />
          </main>
          <div className="bg-lightGray hidden md:block sm:w-64 xl:w-96 fixed top-0 right-0 bottom-0">
            <SideBar index={index} setIndex={setIndex} days={days} />
          </div>
        </Container>
      )}
      {showPlayer && (
        <div className="bg-lightGray hidden md:block sm:w-64 xl:w-96 fixed top-0 right-0 bottom-0">
          <SideBar index={index} setIndex={setIndex} days={days} />
        </div>
      )}
      <Drawer index={index} setIndex={setIndex} days={days} />
    </div>
  );
}
