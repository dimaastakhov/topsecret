import Navbar from "../components/nav";
import Card from "../components/projectCard";
import Play from "../components/badges/play";
import Filter from "./archieve/filter";
import useSWR from "swr";
import moment from 'moment'

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function Projects() {
  const { data } = useSWR(`${BASE_URL}/archives?_limit=30`, fetcher);
  console.log('data ', data)
  return (
    <div className="bg-lightGray min-h-screen">
      <section className="px-5 pt-6 lg:px-14 lg:pt-7 xl:px-28 xl:pt-14 z-20 relative overflow-hidden">
        <Navbar inverse />
          <Filter />
      </section>
      <section className="px-5 lg:px-14 xl:px-28 z-20 h-full relative bg-darkGray overflow-hidden">
        <section className="pt-8 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {data && data.map((e, i) => (
            <div key={i}>
              <div className="h-64 relative">
                <Card title={""} onClick={() =>  window && window.open(e.link, '_blank')} cover_url={e.cover_url} />
                <div onClick={() =>  window && window.open(e.link, '_blank')} className="w-16 h-16 absolute inset-0 m-auto bg-white rounded-full shadow-2xl hover:cursor-pointer">
                  <Play size="20" isBlue />
                </div>
              </div>
              <div className="opacity-50 text-white text-xs mt-3.5">
                {moment(e.date).format('DD MMMM YYYY')}
              </div>
              <div className="text-xl text-white mt-3">
                {e.title}
              </div>
            </div>
          ))}
        </section>
        {/* <button className="bg-brightGray w-full sm:w-96 h-12 rounded flex items-center justify-center text-white mx-auto mb-24 opacity-90 hover:opacity-100">
          Узнать больше
        </button> */}
      </section>
    </div>
  );
}
