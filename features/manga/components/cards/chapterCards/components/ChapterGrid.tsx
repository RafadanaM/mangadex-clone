import styles from "./ChapterGrid.module.css";
import ChapterTitle from "./ChapterTitle";
import ChapterTime from "./ChapterTime";
import ChapterGroup from "./ChapterGroup";
import ChapterViews from "./ChapterViews";
import ChapterUploader from "./ChapterUploader";
import ChapterComments from "./ChapterComments";
import { Chapter } from "@Manga/types/manga.types";

interface IChapterGrid {
  size: "default" | "small" | "medium";
  chapter: Chapter;
}

const ChapterGrid = ({ size, chapter }: IChapterGrid) => {
  return (
    <div
      className={`${styles.chapterGrid} text-xs md:text-sm px-2 py-1 border-l-2 border-l-status-blue overflow-hidden border-b border-b-shade-light last:border-b-0 hover:bg-secondary-dark cursor-pointer`}
    >
      {size === "medium" || size === "small" ? (
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
  );
};

export default ChapterGrid;
