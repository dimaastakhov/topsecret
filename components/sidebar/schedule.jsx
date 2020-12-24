import DayPicker from "./dayPicker";
import Button from "../buttons/default";

export default function Schedule({ days }) {
  return (
    <div className="flex-1 flex flex-col border-t border-borderBright overflow-hidden relative">
      <DayPicker days={days} />

      <div className="absolute h-12 bottom-5 right-5 left-5 xl:bottom-10 xl:right-10 xl:left-10 ">
        <a
          href="https://tv.yandex.ru/channel/57"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Посмотреть программу" />
        </a>
      </div>
    </div>
  );
}
