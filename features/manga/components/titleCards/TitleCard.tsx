import { forwardRef } from "react";
import styles from "@Styles/TitleCard.module.css";
import BaseCard from "@Common/components/cards/BaseCard";
import Tags from "../tags/Tags";
import { MangaTitle } from "../../interfaces/manga.interfaces";
import Stats from "../stats/Stats";
import Status from "../status/Status";
import Title from "./Title";
import Cover from "./Cover";
import { MangaViewSelectionType } from "../../types/manga.types";

interface ITitleCard {
  data: MangaTitle;
  showMore: boolean;
  selectedView: MangaViewSelectionType;
}

const TitleCard = forwardRef<HTMLDivElement | null, ITitleCard>(
  function TitleCard({ data, showMore, selectedView }, ref) {
    const { language, author, descrpition, image, stats, status, tags, title } =
      data;

    const cardType =
      selectedView === "list"
        ? {
            card: styles.dense,
            author: "sm:block",
            status: "sm:inline",
            description: "max-h-[4.3em]",
          }
        : {
            card: styles.normal,
            author: "hidden",
            status: "hidden",
            description: "h-[8.6em]",
          };

    const Author = () => (
      <span
        className={`${styles.author} hidden overflow-hidden overflow-ellipsis whitespace-nowrap ${cardType.author}`}
      >
        {author}
      </span>
    );

    const Description = () => (
      <div
        className={`${styles.description} ${cardType.description} relative overflow-hidden text-sm leading-5 after:content-["_"] after:block after:absolute after:w-full after:bottom-0 after:right-0 after:h-5 after:bg-gradient-to-t after:from-secondary`}
      >
        <p>{descrpition}</p>
      </div>
    );

    return (
      <BaseCard
        className={`grid gap-x-2 gap-y-1 p-2 rounded overflow-hidden ${cardType.card}`}
      >
        <Cover className={styles.cover} title={title} imageUrl={image} />
        <Title title={title} language={language} className={styles.title} />
        <Author />
        <Stats stats={stats} className={styles.stats} />
        <Status
          status={status}
          className={`${styles.status} hidden ${cardType.status}`}
        />
        <Tags
          ref={ref}
          tags={[...tags, ...tags]}
          showMore={showMore}
          className={styles.tags}
        />
        <Description />
      </BaseCard>
    );
  }
);

export default TitleCard;
