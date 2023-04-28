import Icon from "@Common/components/icons/Icon";
import useToggle from "@Common/hooks/useToggle";
import ChapterGrid from "@Manga/components/cards/chapterCards/components/ChapterGrid";
import { Chapter } from "@Manga/types/manga.types";
import ChevronDownIcon from "@Images/icon/chevron-down.svg";
import EyeIcon from "@Images/icon/eye.svg";

const chapter: Chapter = {
  id: "1",
  group: "Wakga",
  language: "EN",
  title: "The Promised Day",
  uploader: "Maxred",
  uploadTime: new Date(),
};

const children = [[0], [1, 2, 3], [1]];

const VolumeCard = () => {
  const [isChaptersExpanded, toggleChaptersExpand] = useToggle(true);

  return (
    <div>
      <div
        onClick={toggleChaptersExpand}
        className="flex justify-between mb-2 cursor-pointer"
      >
        <span>Volume 20</span>
        <span>Ch. 196 - 202</span>
        <div>
          22
          <Icon
            icon={ChevronDownIcon}
            className={`inline transition-transform ${
              isChaptersExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {children.map((x, idx) => (
        <div key={idx} className="bg-secondary mb-2 last:mb-0">
          {x.length > 1 ? (
            <div className="flex items-center px-2 py-1 cursor-pointer">
              <Icon icon={EyeIcon} className="h-5 w-5" />
              <span className="ml-2.5 text-xs font-bold">Chapter 202</span>
              <Icon
                icon={ChevronDownIcon}
                className="inline-block w-5 h-5 ml-auto"
              />
            </div>
          ) : null}
          {x.map((_, idy) => (
            <ChapterGrid key={idy} size="small" chapterLine chapter={chapter} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default VolumeCard;
