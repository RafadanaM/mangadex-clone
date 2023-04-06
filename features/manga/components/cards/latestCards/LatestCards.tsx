import { LatestManga } from "../../../interfaces/manga.interfaces";
import BaseCard from "@Common/components/cards/BaseCard";
import LatestCard from "./LatestCard";

interface ILatestCards {
  className?: string;
  data: LatestManga[];
}

const LatestCards = ({ className = "", data }: ILatestCards) => {
  return (
    <BaseCard className={className}>
      <div className="grid gap-y-2 p-4">
        {data.map((x) => (
          <LatestCard key={x.title} data={x} />
        ))}
      </div>
    </BaseCard>
  );
};

export default LatestCards;
