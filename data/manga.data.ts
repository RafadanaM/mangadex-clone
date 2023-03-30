import ListIcon from "../public/list.svg";
import TwoColIcon from "../public/two-col.svg";
import GridIcon from "../public/grid.svg";
import { MangaListAppearenceType } from "../configs/types/manga.types";

export const mangaListAppearenceData: Record<
  MangaListAppearenceType,
  { icon: any; index: number }
> = {
  list: { index: 0, icon: ListIcon },
  twoCol: { index: 1, icon: TwoColIcon },
  grid: { index: 2, icon: GridIcon },
};
