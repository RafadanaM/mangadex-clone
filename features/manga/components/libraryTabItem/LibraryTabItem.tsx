import TabiItem from "@Common/components/tab/TabItem";
import MangaViewSelect from "../mangaViewSelect/MangaViewSelection";
import { mangaTitles } from "@Manga/data/manga.data";
import TitleCards from "../cards/titleCards/TitleCards";

interface ILibraryTabItem {
  id: string;

  defaultTab?: boolean;
}

const LibraryTabItem = ({ id, defaultTab = false }: ILibraryTabItem) => {
  const data = id === "dropped" ? [] : mangaTitles;

  return (
    <TabiItem id={id} defaultTab={defaultTab}>
      <TitleCards data={data} selectedView="list" />
    </TabiItem>
  );
};

export default LibraryTabItem;
