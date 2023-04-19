import { useEffect, useRef, useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import styles from "./ChapterCard.module.css";
import BaseCard from "@Common/components/cards/BaseCard";
import Flag from "@Common/components/icons/Flag";
import ChapterGrid from "./components/ChapterGrid";
import { MangaChapter, MangaViewSelectionType } from "@Manga/types/manga.types";

interface IChapterCard {
  type: Extract<MangaViewSelectionType, "list" | "twoCol">;
  size: "default" | "small" | "medium";
  data: MangaChapter;
}

const ChapterCard = ({ size, type, data }: IChapterCard) => {
  const chaptersRef = useRef<HTMLDivElement>(null);
  const [showExtraChapters, setShowExtraChapters] = useState<boolean>(false);

  useEffect(() => {
    if (chaptersRef.current) {
      const children = Array.from(chaptersRef.current.children);
      const firstChild = children.at(0);
      let childHeight = 0;
      if (firstChild) {
        childHeight = firstChild.getBoundingClientRect().height;
      }
      const shownChapters = type === "twoCol" && size === "small" ? 2 : 3;

      const newMaxheight =
        type === "list"
          ? "unset"
          : showExtraChapters
          ? `${childHeight * data.chapters.length}px`
          : `${childHeight * shownChapters}px`;
      chaptersRef.current.style.maxHeight = newMaxheight;
    }
  }, [data.chapters.length, showExtraChapters, size, type]);

  const toggleShowExtraChapters = () => {
    setShowExtraChapters((prevState) => !prevState);
  };

  const typeStyle =
    type === "list"
      ? {
          container: styles.chaptersOnly,
          shouldBeHidden: "hidden",
        }
      : {
          container: styles.withCover,
          shouldBeHidden: "",
        };

  return (
    <BaseCard
      className={`${styles.chapterCard} ${typeStyle.container} mb-6 last:mb-0`}
    >
      <div
        className={`${styles.cover} ${typeStyle.shouldBeHidden} relative aspect-[7/10]`}
      >
        <Image alt="cover" fill src={data.image} />
      </div>
      <Link href={`/titles/${data.id}`} passHref>
        <a
          className={`${styles.title} flex items-center text-sm sm:text-base font-bold line-clamp-1 border-b border-b-shade`}
          title={data.title}
        >
          <Flag language={data.language} className="mx-1 inline" />
          {data.title}
        </a>
      </Link>
      <div
        ref={chaptersRef}
        className={`${styles.chapters} transition-[max-height] overflow-hidden`}
      >
        {data.chapters.map((chapter) => (
          <ChapterGrid key={chapter.id} chapter={chapter} size={size} />
        ))}
      </div>
      {data.chapters.length > 3 ? (
        <button
          onClick={toggleShowExtraChapters}
          className={`${styles.button} ${typeStyle.shouldBeHidden} text-primary w-full text-sm`}
        >
          {showExtraChapters ? "Show Less" : "Show All"}
        </button>
      ) : null}
    </BaseCard>
  );
};

export default ChapterCard;
