import Link from "next/link";
import BaseCard from "@Common/components/cards/BaseCard";
import Image from "next/future/image";
import { SeasonalManga } from "../../../types/manga.types";

interface ISeasonalCard {
  data: SeasonalManga;
}

const SeasonalCard = ({ data }: ISeasonalCard) => {
  const { id, description, image, title } = data;
  return (
    <Link href={`/title/${id}`} passHref>
      <a>
        <BaseCard className="w-96 h-56 shadow-md flex">
          <div className="flex-shrink-0 w-1/4 relative">
            <Image
              src={image}
              alt={`${title} cover`}
              fill
              sizes="25%"
              className="object-cover overflow-hidden"
            />
          </div>
          <div className="p-4 overflow-hidden">
            <span className="line-clamp-2 mb-1 font-bold">{title}</span>
            <span className="line-clamp-6">{description}</span>
          </div>
        </BaseCard>
      </a>
    </Link>
  );
};

export default SeasonalCard;
