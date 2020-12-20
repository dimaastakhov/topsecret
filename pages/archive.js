import Navbar from "../components/nav";
import Card from "../components/projectCard";
import Play from "../components/badges/play";
import Filter from "./archieve/filter";

const projects = [
  {
    title: "Орел и Решка. Ивлеева vs Бедняков",
  },
  {
    title: "Василий Ливанов. Я умею держать удар",
  },
  {
    title: "Практические советы на каждый день.",
  },
  {
    title: "«Наше время 2.0»",
  },
  {
    title: "Орел и Решка. Ивлеева vs Бедняков",
  },
  {
    title: "Орел и Решка. Ивлеева vs Бедняков",
  },
  {
    title: "Орел и Решка. Ивлеева vs Бедняков",
  },
];

export default function Projects() {
  return (
    <div className="bg-lightGray min-h-screen">
      <section className="px-5 pt-6 lg:px-14 lg:pt-7 xl:px-28 xl:pt-14 z-20 relative overflow-hidden">
        <Navbar inverse />
          <Filter />
      </section>
      <section className="px-5 lg:px-14 xl:px-28 z-20 h-full relative bg-darkGray overflow-hidden">
        <section className="pt-8 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {projects.map((_, i) => (
            <div key={i}>
              <div className="h-64 relative">
                <Card title={""} setOpen={() => false} />
                <div className="w-16 h-16 absolute inset-0 m-auto bg-white rounded-full shadow-2xl hover:cursor-pointer">
                  <Play size="20" isBlue />
                </div>
              </div>
              <div className="opacity-50 text-white text-xs mt-3.5">
                25 Февраль 22:30:40
              </div>
              <div className="text-xl text-white mt-3">
                Андрей Малахов. Прямой эфир
              </div>
            </div>
          ))}
        </section>
        <button className="bg-brightGray w-96 h-12 rounded flex items-center justify-center text-white mx-auto mb-24 opacity-90 hover:opacity-100">
          Узнать больше
        </button>
      </section>
    </div>
  );
}
