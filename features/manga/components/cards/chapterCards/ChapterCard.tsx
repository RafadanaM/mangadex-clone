import Link from "next/link";
import styles from "./ChapterCard.module.css";
import BaseCard from "@Common/components/cards/BaseCard";
import Flag from "@Common/components/icons/Flag";
import ChapterGrid from "./components/ChapterGrid";
import { MangaViewSelectionType } from "@Manga/types/manga.types";
import { useEffect, useRef, useState } from "react";
import Image from "next/future/image";

interface IChapterCard {
  type: Extract<MangaViewSelectionType, "list" | "twoCol">;
  size: "default" | "small" | "medium";
}

const chapters: number[] = new Array(8).fill(0);

const ChapterCard = ({ size, type }: IChapterCard) => {
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
          ? `${childHeight * chapters.length}px`
          : `${childHeight * shownChapters}px`;
      chaptersRef.current.style.maxHeight = newMaxheight;
    }
  }, [showExtraChapters, size, type]);

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
          shouldBeHidden: " ",
        };

  return (
    <BaseCard className={`${styles.chapterCard} ${typeStyle.container}`}>
      <div
        className={`${styles.cover} ${typeStyle.shouldBeHidden} relative aspect-[7/10]`}
      >
        <Image
          alt="cover"
          fill
          src={
            "https://mangadex.org/covers/6be9ef87-51cc-4064-b414-630f672b2bc9/0a4a3335-fbd1-4bac-b821-cd9dceaf54d7.jpg.256.jpg"
          }
        />
      </div>
      <Link href="/titles/1" passHref>
        <a
          className={`${styles.title} flex items-center text-sm sm:text-base font-bold line-clamp-1 border-b border-b-secondary-dark`}
          title="Three Years Apart"
        >
          <Flag language="EN" className="mx-1 inline" />
          Three Years Apart
        </a>
      </Link>
      <div
        ref={chaptersRef}
        className={`${styles.chapters} transition-[max-height] overflow-hidden`}
      >
        {chapters.map((_, idx) => (
          <ChapterGrid key={idx} size={size} />
        ))}
      </div>
      {chapters.length > 3 ? (
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
