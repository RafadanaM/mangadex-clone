import Image from "next/image";
import Star from "@Images/icon/star.svg";
import Bookmark from "@Images/icon/bookmark.svg";
import Eye from "@Images/icon/eye.svg";
import Message from "@Images/icon/message-square.svg";
import { MangaTitleStats } from "../../interfaces/manga.interfaces";
import { convertToCompact } from "@Common/utils/number.util";

interface IStat {
  stats: MangaTitleStats;
  className?: string;
}

const Stats = ({ stats, className = "" }: IStat) => {
  function renderStat(key: keyof MangaTitleStats, value: number) {
    let Icon;
    const iconClassName = "w-3.5 h-3.5 text-black";
    switch (key) {
      case "comments":
        Icon = <Message className={iconClassName} />;
        break;
      case "followers":
        Icon = <Bookmark className={iconClassName} />;
        break;
      case "rating":
        Icon = <Star className={iconClassName} />;
        break;
      case "views":
        Icon = <Eye className={iconClassName} />;
        break;
    }

    return (
      <div className="flex w-full items-center gap-1">
        {Icon}
        <span className=" text-sm">{convertToCompact(value)}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {renderStat("rating", stats.rating)}
      {renderStat("followers", stats.followers)}
      {renderStat("views", stats.views)}
      {renderStat("comments", stats.comments)}
    </div>
  );
};

export default Stats;
