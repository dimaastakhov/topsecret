import Image from "next/image";

export default function AnnouncementCard() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-36 relative rounded-lg overflow-hidden">
        <Image
          alt="card"
          src="/card.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <p className="text-tab text-sm font-bold pt-3">Сегодня в 21:30</p>
      <p className="text-white text-lg pt-3.5">
        Как государство добилось национализации домена
      </p>
      <p className="text-tabTextDark text-xs pt-1">
        обладатели невероятной памяти и скорости мышления сверхчеловеческой
        выносливости Долгожданное возвращение Насти и Андрея! Новый сезон
        отчаянных путешествий искромётного юмора и самых полезных{" "}
      </p>
    </div>
  );
}
