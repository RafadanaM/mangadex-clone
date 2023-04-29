import Icon from "@Common/components/icons/Icon";
import useToggle from "@Common/hooks/useToggle";
import useClientRect from "@Common/hooks/useClientRect";
import ChapterGrid from "@Manga/components/cards/chapterCards/components/ChapterGrid";
import { Chapter } from "@Manga/types/manga.types";
import ChevronDownIcon from "@Images/icon/chevron-down.svg";
import EyeIcon from "@Images/icon/eye.svg";

interface IChaptersGrid {
  chapters: Chapter[];
  chapterNumber: number;
}

const ChaptersGrid = ({ chapters, chapterNumber }: IChaptersGrid) => {
  const [isChaptersExpanded, toggleChaptersExpanded] = useToggle(true);
  const [chaptersContainerRect, chaptersContainerRef] = useClientRect();
  const [chapterHeaderRect, chapterHeaderRef] = useClientRect();

  return (
    <div
      ref={chaptersContainerRef}
      style={{
        height:
          chapterHeaderRect && chaptersContainerRect
            ? isChaptersExpanded
              ? chaptersContainerRect.height
              : chapterHeaderRect.height
            : undefined,
      }}
      className="bg-secondary mb-2 last:mb-0 transition-[height] overflow-hidden"
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
