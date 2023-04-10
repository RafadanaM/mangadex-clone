import Image from "next/image";
import Star from "@Images/icon/star.svg";
import Bookmark from "@Images/icon/bookmark.svg";
import Eye from "@Images/icon/eye.svg";
import Message from "@Images/icon/message-square.svg";
import { MangaTitleStats } from "../../interfaces/manga.interfaces";
import { convertToCompact } from "@Common/utils/number.util";

interface IStat {
  stats: MangaTitleStats;
  type?: "card" | "detail";
  className?: string;
}

const Stats = ({ stats, type = "card", className = "" }: IStat) => {
  const typeStyle =
    type === "card"
      ? {
          text: "text-sm",
          icon: "w-3.5 h-3.5",
          gap: "gap-1",
        }
      : {
          text: "text-base",
          icon: "w-4 h-4",
          gap: "gap-2",
        };

  function renderStat(key: keyof MangaTitleStats) {
    let Icon;
    let textColor = "";

    const value = stats[key];

    if (type === "card" || (key !== "rating" && value >= 0)) {
      textColor = "text-black";
    } else if (key === "rating") {
      textColor = "text-primary";
    } else if (value < 0) {
      textColor = "text-shade";
    }

    switch (key) {
      case "comments":
        Icon = <Message className={typeStyle.icon} />;
        break;
      case "followers":
        Icon = <Bookmark className={typeStyle.icon} />;
        break;
      case "rating":
        Icon = <Star className={typeStyle.icon} />;
        break;
      case "views":
        Icon = <Eye className={typeStyle.icon} />;
        break;
    }

    return (
      <div className={`flex items-center gap-1 ${textColor}`}>
        {Icon}
        <span className={typeStyle.text}>{convertToCompact(value)}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-start ${typeStyle.gap} ${className}`}
    >
      {renderStat("rating")}
      {renderStat("followers")}
      {type === "card" ? renderStat("views") : renderStat("comments")}
      {type === "card" ? renderStat("comments") : renderStat("views")}
    </div>
  );
};

export default Stats;
