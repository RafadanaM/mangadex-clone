import IconButton from "../common/button/IconButton";
import { MouseEvent, useState } from "react";
import { mangaListAppearenceData } from "../../data/manga.data";
import { MangaListAppearenceType } from "../../configs/types/manga.types";

interface IMangaListAppearence {
  onSelectedChange?: (appearenceType: MangaListAppearenceType) => void;
}

const MangaListAppearence = ({ onSelectedChange }: IMangaListAppearence) => {
  const [selectedItem, setSelectedItem] = useState<MangaListAppearenceType>(
    MangaListAppearenceType.list
  );

  const updateSelectedItem =
    (appearenceType: MangaListAppearenceType) =>
    (_event: MouseEvent<HTMLButtonElement>) => {
      if (appearenceType !== selectedItem) {
        setSelectedItem(appearenceType);
        onSelectedChange?.(appearenceType);
      }
    };

  return (
    <div className="flex relative items-center bg-secondary rounded-sm ml-auto">
      <div
        className="absolute bg-black w-12 h-12 rounded-sm transition-[left]"
        style={{ left: mangaListAppearenceData[selectedItem].index * 48 }}
      ></div>
      {Object.entries(mangaListAppearenceData).map(([k, v]) => (
        <IconButton
          key={k}
          Icon={v.icon}
          className="w-12 h-12 z-10"
          type="menu"
          iconClassName={selectedItem === k ? "text-white" : ""}
          // THIS IS BAD
          onClick={updateSelectedItem(k as MangaListAppearenceType)}
        />
      ))}
    </div>
  );
};

export default MangaListAppearence;
