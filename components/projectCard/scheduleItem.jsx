export default function ScheduleItem({ text, time }) {
  return (
    <div className="w-full h-full flex justify-between items-center bg-lightGray rounded-md p-2 pl-5">
      <p className="text-white">{text}</p>
      <div className="rounded-md bg-borderLight p-3.5 text-xl text-white font-semibold">
        {time}
      </div>
    </div>
  );
}
