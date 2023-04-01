import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex justify-center items-center flex-shrink-0">
        <Image
          src="/images/icon/logo.svg"
          alt="mangadex logo"
          width={34}
          height={34}
        />
        <Image
          src="/images/icon/logo_name.svg"
          alt="mangadex"
          width={126}
          height={28}
        />
      </a>
    </Link>
  );
};

export default Logo;
