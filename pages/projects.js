import Navbar from "../components/nav";
import Container from "../components/container";
import Card from "../components/projectCard";

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
      <Container>
        <Navbar inverse />
        <section className="mt-14 mb-24 sm:mb-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((e, i) => (
            <div className="h-80" key={i}>
              <Card title={e.title} />
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
}
