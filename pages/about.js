import Navbar from "../components/nav";
import Container from "../components/container";
import Hero from "./about/hero";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function about() {
  const { data } = useSWR(`${BASE_URL}/about-us-page`, fetcher);
  const title = data ? data.title : "";
  const content = data && data.contents;

  return (
    <div className="bg-lightGray min-h-screen">
      <Container>
        <Navbar inverse />

        <h1 className="text-2.5xl text-white mt-14">{title}</h1>

        <div className="w-full mt-7">
          {content && (
            <ReactMarkdown
              source={content}
              className="text-sm leading-6 opacity-40 text-justify text-white"
            />
          )}
        </div>
        <Hero wrapClx="bg-#424242 flex items-center h-102 mt-20 w-full rounded-3xl relative overflow-hidden shadow-lg" />
      </Container>
      <div className="bg-darkGray -mt-44">
        <Container>
          <div className="relative pt-64 w-full flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 md:w-2/3">
              <div className="ml-0 sm:ml-10  w-full sm:w-4/6 md:w-1/2 ">
                <div>
                  <h4 className="text-2x1 text-white leading-7">
                    Давайте работать вместе
                  </h4>
                  <p className="text-sm text-white leading-6 opacity-30 mt-4">
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. используют потому, что тот
                    обеспечивает более или менее стандартное заполнение шаблона
                  </p>
                </div>
                <div className="flex flex-wrap mt-7.5 flex-col md:flex-row">
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">
                      Моб. количество
                    </h5>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      +995 536 36 33 31
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">
                      горячая линия
                    </h5>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      +0332 523 325 112
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">Адрес</h5>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      Tbilisi, Georgia
                    </p>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      Улица Давида Агмашенебели, 24
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">Почта</h5>
                    <p className="text-sm text-5D5D5E leading-4 mt-4">
                      info@topsecret.com
                    </p>
                    <p className="text-sm text-5D5D5E leading-4 mt-4">
                      info@topsecret.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 pr-0 sm:pr-10 mt-22 sm:mt-0">
              <div className="mb-17.5">
                <h4 className="text-2x1 text-white leading-7">
                  Напишите нам !
                </h4>
                <p className="text-sm text-white leading-6 opacity-30 mt-4">
                  композиции читаемый текст мешает сосредоточиться. используют
                  потому, что тот обеспечивает более или менее стандартное
                  заполнение шаблона
                </p>
              </div>
              <div className="flex mb-17 flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 xl:mr-1">
                  <input
                    className="bg-transparent pb-1 pt-1 placeholder-white placeholder-opacity-30 text-white border-b border-inputBorderGray mt-4 w-full"
                    type="text"
                    placeholder="Имя"
                  />
                </div>
                <div className="w-full xl:w-1/2 mt-17 xl:mt-0">
                  <input
                    className="bg-transparent pb-1 pt-1 placeholder-white placeholder-opacity-30 text-white border-b border-inputBorderGray mt-4 w-full"
                    type="text"
                    placeholder="Эл. почта"
                  />
                </div>
              </div>
              <div className="w-full mb-9">
                <input
                  className="bg-transparent pb-1 pt-1 placeholder-white placeholder-opacity-30 text-white border-b border-inputBorderGray w-full"
                  type="text"
                  placeholder="Подробное описание"
                />
              </div>
              <button className="w-full sm:w-40">
                <div className="w-full sm:w-40 h-12 flex justify-center items-center bg-137BFF rounded-md mt-7.5 text-sm text-white ">
                  Отправить
                </div>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
