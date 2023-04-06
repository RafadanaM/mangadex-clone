import Image from "next/future/image";
import Link from "next/link";
import { RecentManga } from "../../../types/manga.types";
import Flag from "@Common/components/icons/Flag";

interface IRecentCard {
  data: RecentManga;
}

const RecentCard = ({ data }: IRecentCard) => {
  return (
    <Link href={"/asdad"} passHref>
      <a className="w-32 overflow-hidden inline-block">
        <div className="relative h-44 w-32 overflow-hidden rounded shadow-md after:content-[''] after:absolute after:bg-gradient-to-b after:from-transparent after:opacity-80 after:via-transparent after:to-black after:w-full after:h-full ">
          <Image
            fill
            className="object-cover"
            src={data.image}
            alt={`${data.title} cover`}
          />
          <div className="absolute right-2 bottom-1 z-10">
            <Flag language={data.language} width={24} height={24} />
          </div>
        </div>
        <h6 className="text-sm mt-2 line-clamp-2">{data.title}</h6>
      </a>
    </Link>
  );
};

export default RecentCard;
