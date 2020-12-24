import Tabs from "../bottomSheet/tabs";
import Anouncements from "./anouncements";
import Schedule from "./schedule";

export default function Index({index, setIndex, days}) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="bg-lightTabGray w-full h-20 flex items-center">
        <Tabs style="side" index={index} onToggle={setIndex} />
      </div>
      {index === 0 && <Schedule days={days} />}
      {index !== 0 && <Anouncements />}
    </div>
  );
}
