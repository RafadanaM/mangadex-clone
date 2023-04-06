import Image from "next/image";
import Link from "next/link";

interface ICover {
  className?: string;
  imageUrl: string;
  title: string;
}

const Cover = ({ className = "", imageUrl, title }: ICover) => {
  return (
    <Link href={"link to manga title"} passHref>
      <a
        className={`h-auto w-full aspect-[3/4] relative overflow-hidden rounded shadow-md ${className}`}
      >
        <Image src={imageUrl} alt={`${title} cover art`} layout="fill" />
      </a>
    </Link>
  );
};

export default Cover;
