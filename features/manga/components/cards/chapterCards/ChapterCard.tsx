import Link from "next/link";
import styles from "./ChapterCard.module.css";
import BaseCard from "@Common/components/cards/BaseCard";
import Flag from "@Common/components/icons/Flag";
import ChapterGrid from "./components/ChapterGrid";

const ChapterCard = () => {
  return (
    <BaseCard className={`${styles.chapterCard} ${styles.chaptersOnly}`}>
      <Link href="/titles/1" passHref>
        <a
          className={`${styles.title} flex items-center text-sm md:text-base font-bold line-clamp-1 border-b border-b-secondary-dark`}
          title="Three Years Apart"
        >
          <Flag language="EN" className="mx-1 inline" />
          Three Years Apart
        </a>
      </Link>
      <div className={styles.chapters}>
        <ChapterGrid />
        <ChapterGrid />
        <ChapterGrid />
      </div>
    </BaseCard>
  );
};

export default ChapterCard;
