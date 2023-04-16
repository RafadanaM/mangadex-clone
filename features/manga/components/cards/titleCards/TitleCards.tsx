import { RefObject, createRef } from "react";
import { MangaTitle } from "../../../interfaces/manga.interfaces";
import useIsTagWrapped from "../../../hooks/useIsTagWrapped";
import TitleCard from "./TitleCard";
import { MangaViewSelectionType } from "../../../types/manga.types";

interface ITitleCards {
  data: MangaTitle[];
  selectedView: MangaViewSelectionType;
}

const TitleCards = ({ data, selectedView }: ITitleCards) => {
  const mangaTitlesRefs = data.map(() => createRef<HTMLDivElement | null>());
  const isWrapped = useIsTagWrapped<HTMLDivElement>(mangaTitlesRefs);
  return (
    <div
      className={`grid gap-2 mt-6 ${
        selectedView === "twoCol"
          ? "md:grid-cols-2"
          : selectedView === "grid"
          ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          : ""
      }`}
    >
      {data.map((title, idx) => {
        return (
          <TitleCard
            ref={mangaTitlesRefs[idx]}
            key={idx}
            data={title}
            showMore={isWrapped[idx]}
            selectedView={selectedView}
          />
        );
      })}
    </div>
  );
};

export default TitleCards;
