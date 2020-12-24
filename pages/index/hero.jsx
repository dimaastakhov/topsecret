import Tag from "../../components/badges/primary";
import Play from "../../components/badges/play";
import moment from "moment";

export default function Hero({ onPlayClick, live }) {
  const title = live ? live.title : "Прямой эфир";
  const description = live ? live.description : "";
  const time = live ? live.time : moment().format("hh:mm");
  const titleCSS =
    title.length > 20
      ? "text-xl lg:text-3xl mb-4 "
      : "text-3xl lg:text-6xl mb-4";

  return (
    <section className="h-full flex flex-col justify-center  text-white w-full sm:max-w-2xl py-6">
      <div className="flex mb-6 items-center">
        <div className="w-16 h-8 rounded-md lg:w-20 lg:h-10 transform -skew-x-12 lg:rounded-lg overflow-hidden">
          <Tag label="Live" />
        </div>
        <div className="ml-3 lg:ml-5 text-xl lg:text-2xl">в {time}</div>
      </div>
      <h1 className={titleCSS}>{title}</h1>
      <span className="text-sm lg:text-base text-secondary mb-7">
        {description}
      </span>
      <div
        onClick={onPlayClick}
        className="flex w-40 h-12 rounded-3xl overflow-hidden lg:w-20 lg:h-14 bg-white hover:cursor-pointer"
      >
        <Play label="Включить" />
      </div>
    </section>
  );
}
