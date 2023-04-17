import TabiItem from "@Common/components/tab/TabItem";
import MangaViewSelect from "../mangaViewSelect/MangaViewSelection";
import { mangaTitles } from "@Manga/data/manga.data";
import TitleCards from "../cards/titleCards/TitleCards";
import { MangaTitle } from "@Manga/interfaces/manga.interfaces";
import { MangaViewSelectionType } from "@Manga/types/manga.types";

interface ILibraryTabItem {
  id: string;
  data: MangaTitle[];
  selectedView: MangaViewSelectionType;
  defaultTab?: boolean;
}

const LibraryTabItem = ({
  id,
  data,
  defaultTab = false,
  selectedView,
}: ILibraryTabItem) => {
  return (
    <TabiItem id={id} defaultTab={defaultTab}>
      <TitleCards data={data} selectedView={selectedView} />
    </TabiItem>
  );
};

export default LibraryTabItem;
