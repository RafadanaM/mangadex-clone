import Image from "next/image";
import Link from "next/link";
import { getRelativeTime } from "@Common/utils/date.util";
import Flag from "@Common/components/icons/Flag";
import Tooltip from "@Common/components/tooltip/Tooltip";
import UsersIcon from "@Images/icon/users.svg";
import OutsideIcon from "@Images/icon/outside.svg";
import { LatestManga } from "../../../interfaces/manga.interfaces";

interface ILatestCard {
  data: LatestManga;
}

const LatestCard = ({ data }: ILatestCard) => {
  const groupStyle = "line-clamp-1 break-all px-1 rounded hover:bg-shade-light";
  const renderGroups = () => {
    if (data.translation_groups.length === 0) {
      return (
        <span title="No Groups" className={`${groupStyle} cursor-pointer`}>
          No Groups
        </span>
      );
    }
    return (
      <>
        {data.translation_groups.map((group) => (
          <Link key={group} href={"/groups"}>
            <a title={group} className={groupStyle}>
              {group}
            </a>
          </Link>
        ))}
      </>
    );
  };

  return (
    <div className="flex gap-x-2">
      <div className="relative h-20 min-w-[3.5rem] max-w-[3.5rem] shadow-lg rounded overflow-hidden">
        <Image src={data.image} layout="fill" alt="Manga Cover" />
      </div>

      <div className="flex flex-col justify-evenly w-full">
        <h6 title={data.title} className="font-bold line-clamp-1 break-all">
          {data.title}
        </h6>
        <div className="flex items-center">
          <Flag language={data.language} />
          <span title={data.chapter} className="ml-1 line-clamp-1">
            {data.chapter}
          </span>
          {data.isOfficial && (
            <div className="group relative cursor-pointer">
              <OutsideIcon className="icon-small ml-2" />
              <Tooltip text="Link to Official Publisher" />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex text-sm items-center">
            <UsersIcon className="icon-small" />
            {renderGroups()}
          </div>

          <time className="text-xs whitespace-nowrap">
            {getRelativeTime(data.uploaded)}
          </time>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
