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

interface IMangaCard {
  data: MangaTitle;
  showMore: boolean;
}

const MangaCard = forwardRef<HTMLDivElement | null, IMangaCard>(
  function MangaCard({ data, showMore }, ref) {
    return (
      <BaseCard
        className={`grid gap-x-2 gap-y-1 ${styles.dense} p-2 rounded overflow-hidden`}
      >
        <Link href={"link to manga title"} passHref>
          <a
            className={`h-32 w-auto relative ${styles.cover} overflow-hidden rounded shadow-md`}
          >
            <Image src={data.image} alt="Manga Cover" layout="fill" />
          </a>
        </Link>

        <Link href={"link to manga title"} passHref>
          <a
            className={`${styles.title} overflow-hidden overflow-ellipsis whitespace-nowrap`}
          >
            <Flag
              language={data.language}
              width={22}
              height={22}
              className="inline-block"
            />
            <span className="ml-1 font-bold">{data.title}</span>
          </a>
        </Link>
        <span
          className={`${styles.author} block overflow-hidden overflow-ellipsis whitespace-nowrap`}
        >
          {data.author}
        </span>
        <Stats stats={data.stats} className={`${styles.stats}`} />
        <Status status={data.status} className={`${styles.status}`} />
        <Tags
          ref={ref}
          tags={[...data.tags, ...data.tags]}
          showMore={showMore}
          className={`${styles.tags}`}
        />
        <div
          className={`${styles.description} relative max-h-[5.8em] overflow-hidden text-sm leading-5 after:content-["_"] after:block after:absolute after:w-full after:bottom-0 after:right-0 after:h-5 after:bg-gradient-to-t after:from-secondary`}
        >
          <p>{data.descrpition}</p>
        </div>
      </BaseCard>
    );
  }
);

export default MangaCard;
