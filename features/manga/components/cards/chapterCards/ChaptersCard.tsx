import useMediaQuery from "@Common/hooks/useMediaQuery";
import { MangaChapter, MangaViewSelectionType } from "@Manga/types/manga.types";
import ChapterCard from "./ChapterCard";

interface IChaptersCard {
  data: MangaChapter[];
  type: Extract<MangaViewSelectionType, "list" | "twoCol">;
}

const ChaptersCard = ({ data, type }: IChaptersCard) => {
  const [isLoadingSmall, isSmall] = useMediaQuery("(min-width:640px)");
  const [_, isMedium] = useMediaQuery("(min-width:768px)");
  return (
    <div>
      {!isLoadingSmall
        ? data.map((mangaChapter) => (
            <ChapterCard
              key={mangaChapter.id}
              data={mangaChapter}
              type={type}
              size={isMedium ? "medium" : isSmall ? "small" : "default"}
            />
          ))
        : null}
    </div>
  );
};

export default ChaptersCard;
