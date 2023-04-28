import styles from "./ChapterGrid.module.css";
import ChapterTitle from "./ChapterTitle";
import ChapterTime from "./ChapterTime";
import ChapterGroup from "./ChapterGroup";
import ChapterViews from "./ChapterViews";
import ChapterUploader from "./ChapterUploader";
import ChapterComments from "./ChapterComments";
import { Chapter } from "@Manga/types/manga.types";

interface IChapterGrid {
  size: "default" | "small";
  chapter: Chapter;
  chapterLine?: boolean;
}

const ChapterGrid = ({ size, chapter, chapterLine = false }: IChapterGrid) => {
  return (
    <div
      className={`group flex border-l-2 border-l-status-blue border-b border-b-shade-light last:border-b-0 hover:bg-secondary-dark`}
    >
      {chapterLine ? (
        <div className="pl-2 py-1 group-only:hidden">
          <div className="h-2 w-1 bg-icon rounded-t-sm" />
          <div className="h-1 w-3.5 bg-icon rounded-r-sm" />
          <div className="h-[calc(100%-0.75rem)] w-1 bg-icon rounded-b-sm group-last:hidden" />
        </div>
      ) : null}

      <div
        className={`${styles.chapterGrid} flex-grow px-2 py-1 text-xs md:text-sm overflow-hidden cursor-pointer`}
      >
        {size === "small" ? (
          <>
            <ChapterTitle
              id={chapter.id}
              title={chapter.title}
              language={chapter.language}
            />
            <ChapterTime uploadTime={chapter.uploadTime} />
            <ChapterViews />
            <ChapterGroup group={chapter.group} />
            <ChapterUploader uploader={chapter.uploader} />
            <ChapterComments />
          </>
        ) : (
          <>
            <div className={`${styles.titleComments} flex justify-between`}>
              <ChapterTitle
                id={chapter.id}
                title={chapter.title}
                language={chapter.language}
              />
              <ChapterComments />
            </div>
            <div className={`${styles.groupViews} flex justify-between`}>
              <ChapterGroup group={chapter.group} />
              <ChapterViews />
            </div>
            <div className={`${styles.uploaderTime} flex justify-between`}>
              <ChapterUploader uploader={chapter.uploader} />

              <ChapterTime uploadTime={chapter.uploadTime} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterGrid;
