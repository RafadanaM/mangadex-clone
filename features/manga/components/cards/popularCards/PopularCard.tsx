import Link from "next/link";
import Image from "next/future/image";
import PopularTags from "./PopularTags";
import BaseCard from "@Common/components/cards/BaseCard";
import { PopularManga } from "../../../types/manga.types";

interface IPopularCard {
  data: PopularManga;
}

const PopularCard = ({ data }: IPopularCard) => {
  return (
    <Link href={"/titles"} passHref>
      <a>
        <BaseCard className="relative h-80 sm:h-[13.75rem] md:h-[18.75rem] w-full shadow-md">
          <Image
            src={data.cover}
            alt="test"
            fill
            className="object-cover blur-sm sm:blur-xl select-none opacity-40 sm:opacity-20"
          />
          <div className="grid relative h-full mt-12 px-4 sm:p-4 sm:mt-0 gap-x-4 grid-cols-[35%_auto] sm:grid-cols-[minmax(auto,8rem)_1fr] md:grid-cols-[minmax(auto,_11rem)_1fr]">
            <div className="relative h-48 sm:aspect-auto overflow-hidden rounded shadow-lg">
              <Image
                src={data.cover}
                alt="test"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 overflow-hidden min-w-0">
              <h2 className="text-xl lg:text-4xl font-bold line-clamp-2 min-w-0">
                {data.title}
              </h2>
              <PopularTags tags={data.tags} />
              <div className="text-sm flex-1 overflow-auto hidden md:block">
                <p>{data.description}</p>
              </div>

              <div className="line-clamp-1 mr-32">
                <span className="font-medium italic">
                  {data.authors.join(", ")}
                </span>
              </div>
            </div>
          </div>
        </BaseCard>
      </a>
    </Link>
  );
};

export default PopularCard;
