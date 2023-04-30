import { Chapter } from "@Manga/types/manga.types";
import ChaptersGrid from "./ChaptersGrid";
import { forwardRef } from "react";
import {
  sortChapterAscending,
  sortChapterDescending,
} from "@MangaDetail/util/chapters.util";

interface IChaptersGrids {
  chapters: Record<number, Chapter[]>;
  height?: number;
  isAscending: boolean;
  isAllExpanded: boolean;
}

const ChaptersGrids = forwardRef<HTMLDivElement, IChaptersGrids>(
  function ChaptersGrids(
    { chapters, height, isAscending, isAllExpanded },
    ref
  ) {
    return (
      <div
        ref={ref}
        style={{ height }}
        className="transition-[height] overflow-hidden"
      >
        {Object.entries(chapters)
          .sort(isAscending ? sortChapterAscending : sortChapterDescending)
          .map(([chapterNumber, languageChapters]) => (
            <ChaptersGrid
              key={chapterNumber}
              isAllExpanded={isAllExpanded}
              chapterNumber={+chapterNumber}
              chapters={languageChapters}
            />
          ))}
      </div>
    );
  }
);

export default ChaptersGrids;
