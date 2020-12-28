import DropwDown from "../../components/dropdown";
import DatePicker from "../../components/datePicker";
import Image from "next/image";

export default function Filter({ search, onSearch }) {
  return (
    <div className="my-5 flex items-center flex-wrap">
      <div className="flex-initial max-w-xs min-w-min">
        <input
          type="text"
          value={search}
          onChange={onSearch}
          placeholder="Поиск"
          className="p-2 bg-transparent border rounded border-borderLight overflow-hidden flex items-center text-white placeholder-opacity-20 placeholder-white text-sm text-opacity-70"
        />
      </div>
      {/* <div className="flex-initial max-w-xs min-w-min">
        <DropwDown />
      </div>
      <div className="flex-initial max-w-xs min-w-min relative ml-3 hover:cursor-pointer">
        <DatePicker />
        <div className="absolute pr-2 top-0 right-0 h-full flex items-center select-none text-white hover:cursor-pointer text-lg opacity-40">
          <Image
            width="12"
            height="12"
            alt="prev"
            src="/arrow-up.svg"
            layout="fixed"
            className="transform rotate-180"
          />
        </div>
      </div> */}
    </div>
  );
}
