import Image from "next/image";

const FB_LINK = "https://www.facebook.com/sovsek";
const INSTA_LINK = "https://www.instagram.com/sovsektv/";
const YOUTUBE_LINK = "https://www.youtube.com/user/SovSekretnoTV";

export default function Social({ wrapClx }) {
  return (
    <div className={wrapClx}>
      <a href={FB_LINK} target="_blank">
        <div className="mr-2 flex items-center opacity-90 hover:opacity-100 hover:cursor-pointer">
          <Image
            width="36"
            height="36"
            alt="facebook"
            src="/fb.svg"
            layout="fixed"
            quality={100}
          />
        </div>
      </a>
      <a href={INSTA_LINK} target="_blank">
        <div className="mr-2 flex items-center opacity-90 hover:opacity-100 hover:cursor-pointer">
          <Image
            width="36"
            height="36"
            alt="instagram"
            src="/insta.svg"
            layout="fixed"
            quality={100}
          />
        </div>
      </a>
      <a href={YOUTUBE_LINK} target="_blank">
        <div
          style={{ height: 36, width: 36 }}
          className="flex items-center justify-center opacity-90 hover:opacity-100 hover:cursor-pointer border border-iconBorder rounded"
        >
          <Image
            width="22"
            height="22"
            alt="youtube"
            src="/youtube.svg"
            layout="fixed"
            quality={100}
          />
        </div>
      </a>
    </div>
  );
}
