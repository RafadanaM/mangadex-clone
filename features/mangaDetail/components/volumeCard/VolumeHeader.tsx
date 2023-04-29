import { MouseEventHandler } from "react";
import Icon from "@Common/components/icons/Icon";
import ChevronDownIcon from "@Images/icon/chevron-down.svg";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";

interface IVolumeHeader {
  onClick: MouseEventHandler<HTMLDivElement>;
  isExpanded: boolean;
  volume_info: Omit<MangaVolume, "chapters">;
  chapterCount: number;
}

const VolumeHeader = ({
  onClick,
  isExpanded,
  volume_info,
  chapterCount,
}: IVolumeHeader) => {
  return (
    <div onClick={onClick} className="flex justify-between mb-2 cursor-pointer">
      <span>{volume_info.volume_name}</span>
      <span>
        Ch. {volume_info.startChapter} - {volume_info.endChapter}
      </span>
      <div>
        {chapterCount}
        <Icon
          icon={ChevronDownIcon}
          className={`inline transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default VolumeHeader;
