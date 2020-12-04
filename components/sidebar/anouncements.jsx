import Card from "./announcementCard";
import Container from "./container";
import styles from "./styles.module.scss";

export default function Announcements() {
  return (
    <section className={`${styles.container} flex-1 overflow-y-scroll`}>
      <div className="max-w-sm mx-auto w-full py-7">
        <Container>
          <Card />
        </Container>
      </div>
      <div className="bg-lightTabGray max-w-sm mx-auto w-full py-7">
        <Container>
          <Card />
        </Container>
      </div>
      <div className="max-w-sm mx-auto w-full py-7">
        <Container>
          <Card />
        </Container>
      </div>
      <div className="bg-lightTabGray max-w-sm mx-auto w-full py-7">
        <Container>
          <Card />
        </Container>
      </div>
    </section>
  );
}
