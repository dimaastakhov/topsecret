import Navbar from "../components/nav";
import Container from "../components/container";
import Image from "next/image";

export default function about() {
  return (
    <div className="bg-lightGray min-h-screen    ">
      <Container className="border-white border-4 border-solid flex">
        <Navbar />

        <div className="w-60 h-6 mt-16">
          <h2 className="text-sm text-fff font-bold ">История компании</h2>
        </div>

        <div className="w-full mt-8">
          <p className="text-sm leading-6  opacity-40 text-justify text-fff">
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не
            всегда приемлемые модификации, например, юмористические вставки или
            слова, которые даже отдалённо не напоминают латынь. Если вам нужен
            Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
            какой-нибудь шутки, скрытой в середине абзаца. Также все другие
            известные генераторы Lorem Ipsum используют один и тот же текст,
            который они просто повторяют, пока не достигнут нужный объём. Это
            делает предлагаемый здесь генератор единственным настоящим Lorem
            Ipsum генератором. Он использует словарь из более чем 200 латинских
            слов, а также набор моделей предложений. В результате
            сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
            повторяющихся абзацей или "невозможных" слов.
          </p>
          <p className="text-sm leading-6  opacity-40 text-justify text-fff mt-5">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона, а также
            реальное распределение букв и пробелов в абзацах, которое не
            получается при простой дубликации "Здесь ваш текст.. Здесь ваш
            текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
            редакторы HTML используют Lorem Ipsum в качестве текста по
            умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу
            показывает, много веб-страниц всё ещё дожидаются своего настоящего
            рождения. За прошедшие годы текст Lorem Ipsum получил много версий.
            Некоторые версии появились по ошибке, некоторые - намеренно
            (например, юмористические варианты).
          </p>
        </div>
        <div className="bg-#424242 flex items-center h-102 mt-6 w-full rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 bottom-0 right-1/3 left-0 rounded-3xl overflow-hidden pl-5/8">
            <Image
              alt="background"
              src="/map.png"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div className="max-w-lg ml-auto  mr-auto sm:mr-28 ">
            <div className="flex flex-col space-y-48 h-102 sm:h-auto sm:space-y-0">
              <div className="mt-7 sm:mt-0">
                <h2 className="text-8.5 md:text-10 leading-13  text-fff tracking-wider">
                  Смотрите “TOPSECRET”
                </h2>
                <h3 className="text-8.5 md:text-10 leading-13 text-fff tracking-wider">
                  из любой точки мира
                </h3>
                <p className="text-xs lg:text-sm  text-fff opacity-50 w-88 lg:w-140 ">
                  Давно выяснено, что при оценке дизайна и композиции читаемый
                  текст мешает сосредоточиться. используют потому, что тот
                  обеспечивает более или менее стандартное заполнение шаблона, а
                  также реальное
                </p>
              </div>
              <div>
                <button className="w-full sm:w-40">
                  <div className="w-full sm:w-40 h-12 flex justify-center items-center bg-137BFF rounded-md mt-7.5 ">
                    <div className="mr-2.5 mt-1">
                      <Image
                        width="24"
                        height="24"
                        alt="play"
                        src="/play-tr.svg"
                        layout="fixed"
                        quality={100}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-fff">Смотреть</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-22 w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 md:w-2/3">
            <div className="ml-0 sm:ml-10  w-full sm:w-4/6 md:w-1/2 ">
              <div>
                <h4 className="text-2x1 text-fff leading-7">
                  Давайте работать вместе{" "}
                </h4>
                <p className="text-sm text-fff leading-6 opacity-30 mt-4">
                  Давно выяснено, что при оценке дизайна и композиции читаемый
                  текст мешает сосредоточиться. используют потому, что тот
                  обеспечивает более или менее стандартное заполнение шаблона
                </p>
              </div>
              <div className="flex flex-wrap mt-7.5 flex-col md:flex-row">
                <div className="w-1/2 mt-12.5">
                  <h5 className="text-sm text-fff leading-5.25">
                    Моб. количество
                  </h5>
                  <p className="text-sm text-5D5D5E leading-5.5  mt-4">
                    +995 536 36 33 31
                  </p>
                </div>
                <div className="w-1/2 mt-12.5">
                  <h5 className="text-sm text-fff leading-5.25">
                    горячая линия
                  </h5>
                  <p className="text-sm text-5D5D5E leading-5.5  mt-4">
                    +0332 523 325 112
                  </p>
                </div>
                <div className="w-1/2 mt-12.5">
                  <h5 className="text-sm text-fff leading-5.25">Адрес</h5>
                  <p className="text-sm text-5D5D5E leading-5.5  mt-4">
                    Tbilisi, Georgia
                  </p>
                  <p className="text-sm text-5D5D5E leading-5.5  mt-4">
                    Улица Давида Агмашенебели, 24
                  </p>
                </div>
                <div className="w-1/2 mt-12.5">
                  <h5 className="text-sm text-fff leading-5.25">Почта</h5>
                  <p className="text-sm text-5D5D5E leading-4 mt-4">
                    Info@topsecret.com
                  </p>
                  <p className="text-sm text-5D5D5E leading-4 mt-4">
                    Info@topsecret.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 pr-0 sm:pr-10 mt-22 sm:mt-0 ">
            <div className="mb-17.5">
              <h4 className="text-2x1 text-fff leading-7">Напишите нам !</h4>
              <p className="text-sm text-fff leading-6 opacity-30 mt-4">
                композиции читаемый текст мешает сосредоточиться. используют
                потому, что тот обеспечивает более или менее стандартное
                заполнение шаблона
              </p>
            </div>
            <div className="flex mb-17 flex-col xl:flex-row">
              <div className="w-full xl:w-1/2">
                <input
                  className="bg-lightGray pb-1 pt-1 text-545454 border-b-2 border-gray-600 mt-4 w-full xl:w-2/3 "
                  type="text"
                  placeholder="имя"
                />
              </div>
              <div className="w-full xl:w-1/2 mt-17 xl:mt-0">
                <div className="h-4">
                  <p className="text-xs text-545454 leading-3.5">Эл. почта</p>
                </div>
                <input
                  className="bg-lightGray pb-1 pt-1 text-fff border-b-2 border-gray-600 w-full  xl:w-2/3   "
                  type="text"
                  value="Info@topsecret.com"
                />
              </div>
            </div>
            <div className="w-full mb-9">
              <input
                className="bg-lightGray pb-1 pt-1  text-545454 border-b-2 border-gray-600 w-full  "
                type="text"
                placeholder="Подробное описание"
              />
            </div>
            <button className="w-full sm:w-40">
              <div className="w-full sm:w-40 h-12 flex justify-center items-center bg-137BFF rounded-md mt-7.5 text-sm text-fff ">
                Отправить
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
