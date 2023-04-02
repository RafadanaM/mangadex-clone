import IconButton from "@Common/components/button/IconButton";
import { MouseEvent, useState } from "react";
import { MangaViewSelectionType } from "../../types/manga.types";
import { mangaViewSelectionData } from "../../data/manga.data";

interface IMangaViewSelect {
  onSelectedChange?: (appearenceType: MangaViewSelectionType) => void;
  viewTypes?: MangaViewSelectionType[];
}

const MangaViewSelect = ({ onSelectedChange }: IMangaViewSelect) => {
  const [selectedItem, setSelectedItem] = useState<MangaViewSelectionType>(
    MangaViewSelectionType.list
  );

  const updateSelectedItem =
    (appearenceType: MangaViewSelectionType) =>
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
        style={{ left: mangaViewSelectionData[selectedItem].index * 48 }}
      />
      {Object.entries(mangaViewSelectionData).map(([k, v]) => (
        <IconButton
          key={k}
          Icon={v.icon}
          className="w-12 h-12 z-10"
          type="menu"
          iconClassName={`transition-colors ${
            selectedItem === k ? "text-white" : ""
          }`}
          // THIS IS BAD
          onClick={updateSelectedItem(k as MangaViewSelectionType)}
        />
      ))}
    </div>
  );
};

export default MangaViewSelect;
