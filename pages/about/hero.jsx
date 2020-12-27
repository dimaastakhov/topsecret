import Image from "next/image";
import Link from "next/link";

export default function Hero({ wrapClx, coverage }) {
  return (
    <div className={wrapClx}>
      <div className="absolute top-1/2 sm:top-0 bottom-0 right-0 sm:right-1/3 left-0 rounded-3xl overflow-hidden pl-5/8">
        <Image
          alt="background"
          src="/map.png"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <div className="h-full px-5 pb-5 pt-8 sm:p-0 sm:ml-auto sm:mr-20 lg:mr-28 sm:h-auto z-10">
        <div className="h-full flex flex-col">
          <div className="w-full sm:w-100 lg:w-140 text-center sm:text-left">
            <h2 className="text-2xl sm:text-4.5xl sm:leading-13 text-white font-semibold tracking-tight sm:tracking-tighter">
              {coverage?.title}
            </h2>
            <p className="text-sm text-white opacity-50 mt-4 sm:m-0 tracking-normal">
              {coverage?.description}
            </p>
          </div>
          <div className="mt-auto sm:mt-8">
            <button className="w-full sm:w-40">
              <Link href="/">
                <a>
                  <div className="w-full sm:w-40 h-12 flex justify-center items-center bg-137BFF rounded-md">
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
                      <p className="text-sm text-white">Смотреть</p>
                    </div>
                  </div>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
