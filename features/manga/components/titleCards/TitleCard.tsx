import { forwardRef } from "react";
import styles from "@Styles/MangaCard.module.css";
import Image from "next/image";
import Link from "next/link";
import BaseCard from "@Common/components/cards/BaseCard";
import Flag from "@Common/components/icons/Flag";
import Tags from "../tags/Tags";
import { MangaTitle } from "../../interfaces/manga.interfaces";
import Stats from "../stats/Stats";
import Status from "../status/Status";
import Title from "./Title";
import Cover from "./Cover";

interface IMangaCard {
  data: MangaTitle;
  showMore: boolean;
}

const MangaCard = forwardRef<HTMLDivElement | null, IMangaCard>(
  function MangaCard({ data, showMore }, ref) {
    const { language, author, descrpition, image, stats, status, tags, title } =
      data;

    const Author = () => (
      <span
        className={`${styles.author} hidden sm:block overflow-hidden overflow-ellipsis whitespace-nowrap`}
      >
        {author}
      </span>
    );

    const Description = () => (
      <div
        className={`${styles.description} relative max-h-[4.3em] overflow-hidden text-sm leading-5 after:content-["_"] after:block after:absolute after:w-full after:bottom-0 after:right-0 after:h-5 after:bg-gradient-to-t after:from-secondary`}
      >
        <p>{descrpition}</p>
      </div>
    );

    return (
      <BaseCard
        className={`grid gap-x-2 gap-y-1 p-2 rounded overflow-hidden ${styles.dense}`}
      >
        <Cover className={styles.cover} title={title} imageUrl={image} />
        <Title title={title} language={language} className={styles.title} />
        <Author />
        <Stats stats={stats} className={styles.stats} />
        <Status
          status={status}
          className={`${styles.status} hidden sm:inline`}
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

export default MangaCard;
