import Card from "./announcementCard";
import Container from "./container";
import styles from "./styles.module.scss";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function Announcements() {
  const { data } = useSWR(
    `${BASE_URL}/anouncements?_sort=published_at:desc&_limit=20`,
    fetcher
  );

  const evenCSS = "max-w-sm mx-auto w-full py-7";
  const oddCSS = "bg-lightTabGray max-w-sm mx-auto w-full py-7";

  return (
    <section className={`${styles.container} flex-1 overflow-y-scroll`}>
      {data &&
        !data.error &&
        data.map((ann, i) => (
          <div className={i % 2 === 0 ? evenCSS : oddCSS} key={i}>
            <Container>
              <Card ann={ann} />
            </Container>
          </div>
        ))}
    </section>
  );
}
