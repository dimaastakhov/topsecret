import { useState } from "react";
import Navbar from "../components/nav";
import Container from "../components/container";
import Hero from "./about/hero";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function about() {
  const initialMessage = { name: "", email: "", text: "" };
  const [message, setMessage] = useState(initialMessage);
  const { data } = useSWR(`${BASE_URL}/about-us-page`, fetcher);
  const title = data ? data.title : "";
  const content = data && data.contents;
  const coverage = data?.coverage;
  const contact = data?.contact;

  const sendMessage = () => {
    if (!message.email) return;

    fetcher("/api/sendmail", { method: "post", body: JSON.stringify(message) })
      .then((res) => {
        console.log('res ', res)
        if (res.error) throw res.error;
        setMessage(initialMessage);
      })
      .catch((e) => console.log(e));
  };

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
        <Hero
          coverage={coverage}
          wrapClx="bg-#424242 flex items-center h-102 mt-20 w-full rounded-3xl relative overflow-hidden shadow-lg"
        />
      </Container>
      <div className="bg-darkGray -mt-44">
        <Container>
          <div className="relative pt-64 w-full flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 md:w-2/3">
              <div className="ml-0 sm:ml-10  w-full sm:w-4/6 md:w-1/2 ">
                <div>
                  <h4 className="text-2x1 text-white leading-7">
                    {contact?.leftContent?.title}
                  </h4>
                  <p className="text-sm text-white leading-6 opacity-30 mt-4">
                    {contact?.leftContent?.text}
                  </p>
                </div>
                <div className="flex flex-wrap mt-7.5 flex-col md:flex-row">
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">
                      {contact?.mobPhoneLabel}
                    </h5>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      {contact?.mobPhone}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">
                      {contact?.homePhoneLabel}
                    </h5>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      {contact?.homePhone}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">
                      {contact?.addressLabel}
                    </h5>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      {contact?.addressCityCountry}
                    </p>
                    <p className="text-sm text-5D5D5E leading-5.5 mt-4">
                      {contact?.addressStreet}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 mt-12.5">
                    <h5 className="text-sm text-white leading-5.25">
                      {contact?.emailLabel}
                    </h5>
                    <p className="text-sm text-5D5D5E leading-4 mt-4">
                      {contact?.emailOne}
                    </p>
                    <p className="text-sm text-5D5D5E leading-4 mt-4">
                      {contact?.emailTwo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 pr-0 sm:pr-10 mt-22 sm:mt-0">
              <div className="mb-17.5">
                <h4 className="text-2x1 text-white leading-7">
                  {contact?.rigthContent?.title}
                </h4>
                <p className="text-sm text-white leading-6 opacity-30 mt-4">
                  {contact?.rightContent?.text}
                </p>
              </div>
              <div className="flex mb-17 flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 xl:mr-1">
                  <input
                    className="bg-transparent pb-1 pt-1 placeholder-white placeholder-opacity-30 text-white border-b border-inputBorderGray mt-4 w-full"
                    type="text"
                    placeholder="Имя"
                    value={message?.name}
                    onChange={(e) =>
                      e?.target &&
                      setMessage({ ...message, name: e.target.value })
                    }
                  />
                </div>
                <div className="w-full xl:w-1/2 mt-17 xl:mt-0">
                  <input
                    className="bg-transparent pb-1 pt-1 placeholder-white placeholder-opacity-30 text-white border-b border-inputBorderGray mt-4 w-full"
                    type="text"
                    placeholder="Эл. почта"
                    value={message?.email}
                    onChange={(e) =>
                      e?.target &&
                      setMessage({ ...message, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="w-full mb-9">
                <input
                  className="bg-transparent pb-1 pt-1 placeholder-white placeholder-opacity-30 text-white border-b border-inputBorderGray w-full"
                  type="text"
                  placeholder="Подробное описание"
                  value={message?.text}
                  onChange={(e) =>
                    e?.target &&
                    setMessage({ ...message, text: e.target.value })
                  }
                />
              </div>
              <button className="w-full sm:w-40 mt-7.5">
                <div
                  onClick={sendMessage}
                  className="w-full sm:w-40 h-12 flex justify-center items-center bg-137BFF rounded-md text-sm text-white "
                >
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
