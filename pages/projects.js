import Navbar from "../components/nav";
import Container from "../components/container";
import Card from "../components/projectCard";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function Projects() {
  const { data } = useSWR(`${BASE_URL}/projects`, fetcher);
  return (
    <div className="bg-lightGray min-h-screen">
      <Container>
        <Navbar inverse />
        <section className="mt-14 mb-24 sm:mb-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data &&
            data.map((e, i) => (
              <div className="h-80" key={i}>
                <Card title={e.title} cover={e.cover} contents={e.contents} items={e.items} />
              </div>
            ))}
        </section>
      </Container>
    </div>
  );
}
