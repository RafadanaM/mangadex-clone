import { Chapter } from "@Manga/types/manga.types";
import ChaptersGrid from "./ChaptersGrid";
import { forwardRef } from "react";

interface IChaptersGrids {
  chapters: Record<number, Chapter[]>;
  height?: number;
}

const ChaptersGrids = forwardRef<HTMLDivElement, IChaptersGrids>(
  function ChaptersGrids({ chapters, height }, ref) {
    return (
      <div
        ref={ref}
        style={{ height }}
        className="transition-[height] overflow-hidden"
      >
        {Object.entries(chapters).map(([chapterNumber, languageChapters]) => (
          <ChaptersGrid
            key={chapterNumber}
            chapterNumber={+chapterNumber}
            chapters={languageChapters}
          />
        ))}
      </div>
    );
  }
);

export default ChaptersGrids;
