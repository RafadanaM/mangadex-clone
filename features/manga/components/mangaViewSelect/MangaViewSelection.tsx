import IconButton from "@Common/components/button/IconButton";
import { MouseEvent, useState } from "react";
import { MangaViewSelectionType } from "../../types/manga.types";
import { mangaViewSelectionData } from "../../data/manga.data";
import { pick } from "@Common/utils/object.util";

interface IMangaViewSelect {
  onSelectedChange?: (appearenceType: MangaViewSelectionType) => void;
  viewTypes?: MangaViewSelectionType[];
  defaultView?: MangaViewSelectionType;
}

const defaultViewTypes: MangaViewSelectionType[] = ["list", "twoCol", "grid"];

const MangaViewSelect = ({
  onSelectedChange,
  viewTypes = defaultViewTypes,
  defaultView = viewTypes[0],
}: IMangaViewSelect) => {
  const selectedViewTypes =
    viewTypes.length > 0
      ? Array.from<MangaViewSelectionType>(new Set(viewTypes))
      : defaultViewTypes;
  const selectedDefaultView = viewTypes.includes(defaultView)
    ? defaultView
    : viewTypes[0];
  const filteredObject = pick(mangaViewSelectionData, ...selectedViewTypes);
  const [selectedItem, setSelectedItem] = useState<MangaViewSelectionType>(
    MangaViewSelectionType[selectedDefaultView]
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
    <div className="flex relative items-center h-11 bg-secondary rounded-sm ml-auto">
      <div
        className="absolute bg-black w-11 h-full rounded-sm transition-[left]"
        style={{ left: selectedViewTypes.indexOf(selectedItem) * 2.75 + "rem" }}
      />
      {Object.entries(filteredObject).map(([k, v]) => (
        <IconButton
          key={k}
          theme="light"
          Icon={v.icon}
          round={false}
          className="w-11 h-full z-10"
          buttonType="menu"
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
