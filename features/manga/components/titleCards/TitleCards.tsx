import { RefObject } from "react";
import { MangaTitle } from "../../interfaces/manga.interfaces";
import useIsTagWrapped from "../../hooks/useIsTagWrapped";
import TitleCard from "./TitleCard";

interface IMangaCards {
  data: MangaTitle[];
  refs: RefObject<HTMLDivElement | null>[];
}

const MangaCards = ({ data, refs }: IMangaCards) => {
  const isWrapped = useIsTagWrapped<HTMLDivElement>(refs);
  return (
    <div className="grid gap-2 mt-6">
      {data.map((title, idx) => {
        return (
          <TitleCard
            ref={refs[idx]}
            key={idx}
            data={title}
            showMore={isWrapped[idx]}
          />
        );
      })}
    </div>
  );
};

export default MangaCards;
