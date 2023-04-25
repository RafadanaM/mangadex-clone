import Flag from "@Common/components/icons/Flag";
import { AlternativeTitle } from "@MangaDetail/types/mangaInfo.type";

interface IAlternativeTitles {
  titles: AlternativeTitle[];
}

const AlternativeTitles = ({ titles }: IAlternativeTitles) => {
  return (
    <div className="w-full">
      <span className="inline-block text-icon font-bold mb-1">
        Alternative Titles
      </span>
      {titles.map((title) => (
        <div
          key={title.language}
          className="flex items-center gap-1.5 border-b-2 border-secondary mb-1 last:mb-0 last:border-0"
        >
          <Flag language={title.language} />
          <span>{title.title}</span>
        </div>
      ))}
    </div>
  );
};

export default AlternativeTitles;
