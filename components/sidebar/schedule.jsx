import DayPicker from "./dayPicker";
import Button from "../buttons/default";

export default function Schedule() {
  return (
    <div className="flex-1 flex flex-col border-t border-borderBright overflow-hidden relative">
      <DayPicker />
      <div className="absolute h-12 bottom-5 right-5 left-5 xl:bottom-10 xl:right-10 xl:left-10 ">
        <Button text="Посмотреть программу" />
      </div>
    </div>
  );
}
