import Tabs from "../bottomSheet/tabs";
import Card from "./announcementCard";
import Container from "./container";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-lightTabGray w-full h-16 flex items-center overflow-hidden">
        <Tabs style="side" />
      </div>
      <Container>
          <div className="max-w-sm mx-auto w-full py-7">
            <Card />
          </div>
          <div className="max-w-sm mx-auto w-full py-7">
            <Card />
          </div>
          <div className="max-w-sm mx-auto w-full py-7">
            <Card />
          </div>
          <div className="max-w-sm mx-auto w-full py-7">
            <Card />
          </div>
      </Container>
    </div>
  );
}
