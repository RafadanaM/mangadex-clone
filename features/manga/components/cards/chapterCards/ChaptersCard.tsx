import useMediaQuery from "@Common/hooks/useMediaQuery";
import { MangaChapter, MangaViewSelectionType } from "@Manga/types/manga.types";
import ChapterCard from "./ChapterCard";

interface IChaptersCard {
  data: MangaChapter[];
  type: Extract<MangaViewSelectionType, "list" | "twoCol">;
}

const ChaptersCard = ({ data, type }: IChaptersCard) => {
  const [isSmallLoading, isSmall] = useMediaQuery("(min-width:640px)");
  return (
    <div>
      {!isSmallLoading
        ? data.map((mangaChapter) => (
            <ChapterCard
              key={mangaChapter.id}
              data={mangaChapter}
              type={type}
              size={isSmall ? "small" : "default"}
            />
          ))
        : null}
    </div>
  );
};

export default ChaptersCard;
