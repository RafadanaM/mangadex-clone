import Icon from "@Common/components/icons/Icon";
import useClientRect from "@Common/hooks/useClientRect";
import ChapterGrid from "@Manga/components/cards/chapterCards/components/ChapterGrid";
import { Chapter } from "@Manga/types/manga.types";
import ChevronDownIcon from "@Images/icon/chevron-down.svg";
import EyeIcon from "@Images/icon/eye.svg";
import { useEffect, useState } from "react";

interface IChaptersGrid {
  chapters: Chapter[];
  chapterNumber: number;
  isAllExpanded: boolean;
  isVolumeExpanded: boolean;
}

const ChaptersGrid = ({
  chapters,
  chapterNumber,
  isAllExpanded,
  isVolumeExpanded,
}: IChaptersGrid) => {
  const [isChaptersExpanded, setChaptersExpanded] = useState(true);
  const [chaptersContainerRect, chaptersContainerRef] = useClientRect();
  const [chapterHeaderRect, chapterHeaderRef] = useClientRect();

  useEffect(() => {
    setChaptersExpanded(isAllExpanded);
  }, [isAllExpanded]);

  const toggleChaptersExpanded = () => {
    setChaptersExpanded((prevState) => !prevState);
  };

  return (
    <div
      ref={chaptersContainerRef}
      style={{
        height: isVolumeExpanded
          ? isChaptersExpanded
            ? chaptersContainerRect?.height
            : chapters.length > 1
            ? chapterHeaderRect?.height
            : 0
          : 0,
      }}
      className={`bg-secondary transition-[height] overflow-hidden ${
        isVolumeExpanded ? " mb-2 last:mb-0" : ""
      } `}
    >
      {chapters.length > 1 ? (
        <div
          ref={chapterHeaderRef}
          onClick={toggleChaptersExpanded}
          className="flex items-center px-2 py-1 cursor-pointer"
        >
          <Icon icon={EyeIcon} className="h-5 w-5" />
          <span className="ml-2.5 text-xs font-bold">
            Chapter {chapterNumber}
          </span>
          <Icon
            icon={ChevronDownIcon}
            className={`inline-block w-5 h-5 ml-auto ${
              isChaptersExpanded ? "" : "rotate-180"
            } `}
          />
        </div>
      ) : null}
      {chapters.map((chapter) => (
        <ChapterGrid
          key={chapter.id}
          size="small"
          chapterLine
          chapter={chapter}
        />
      ))}
    </div>
  );
};

export default ChaptersGrid;
