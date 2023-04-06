import { forwardRef } from "react";
import BaseCard from "@Common/components/cards/BaseCard";
import Tags from "../../tags/Tags";
import { MangaTitle } from "../../../interfaces/manga.interfaces";
import Stats from "../../stats/Stats";
import Status from "../../status/Status";
import Title from "./Title";
import Cover from "./Cover";
import { MangaViewSelectionType } from "../../../types/manga.types";

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
        ? "dense"
        : selectedView === "twoCol"
        ? "normal"
        : "cover-only";

    return (
      <BaseCard className={`title-card ${cardType}`}>
        <Cover className="cover" title={title} imageUrl={image} />
        <Title title={title} language={language} className="title" />
        <span className="author">{author}</span>
        <Stats stats={stats} className="stats" />
        <Status status={status} className="status" />
        <Tags
          ref={ref}
          tags={[...tags, ...tags]}
          showMore={showMore}
          className="tags"
        />
        <div className="description">
          <p>{descrpition}</p>
        </div>
      </BaseCard>
    );
  }
);

export default TitleCard;
