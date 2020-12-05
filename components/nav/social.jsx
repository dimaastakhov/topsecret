import Image from "next/image";

export default function Social({wrapClx}) {
  return (
    <div className={wrapClx}>
      <div className="mr-2 flex items-center">
        <Image
          width="36"
          height="36"
          alt="facebook"
          src="/fb.svg"
          layout="fixed"
          quality={100}
        />
      </div>
      <div className="mr-2 flex items-center">
        <Image
          width="36"
          height="36"
          alt="instagram"
          src="/insta.svg"
          layout="fixed"
          quality={100}
        />
      </div>
      <div className="flex items-center">
        <Image
          width="36"
          height="36"
          alt="linkedin"
          src="/linkedin.svg"
          layout="fixed"
          quality={100}
        />
      </div>
    </div>
  );
}
