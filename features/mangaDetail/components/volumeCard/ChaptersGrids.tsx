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
  isVolumeExpanded: boolean;
}

const ChaptersGrids = forwardRef<HTMLDivElement, IChaptersGrids>(
  function ChaptersGrids(
    { chapters, height, isAscending, isAllExpanded, isVolumeExpanded },
    ref
  ) {
    return (
      <
        // ref={ref}
        // style={{ height }}
        // className="transition-[height] overflow-hidden"
      >
        {Object.entries(chapters)
          .sort(isAscending ? sortChapterAscending : sortChapterDescending)
          .map(([chapterNumber, languageChapters]) => (
            <ChaptersGrid
              key={chapterNumber}
              isVolumeExpanded={isVolumeExpanded}
              isAllExpanded={isAllExpanded}
              chapterNumber={+chapterNumber}
              chapters={languageChapters}
            />
          ))}
      </>
    );
  }
);

export default ChaptersGrids;
