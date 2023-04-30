import { useEffect, useState } from "react";
import VolumeHeader from "./VolumeHeader";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";
import {
  sortChapterAscending,
  sortChapterDescending,
} from "@MangaDetail/util/chapters.util";
import ChaptersGrid from "./ChaptersGrid";

interface IVolumeCard {
  volume: MangaVolume;
  isAllExpanded: boolean;
  isAscending: boolean;
}

const VolumeCard = ({ volume, isAllExpanded, isAscending }: IVolumeCard) => {
  const [isVolumeExpanded, setisVolumeExpanded] = useState(isAllExpanded);

  const toggleVolumeExpanded = () => {
    setisVolumeExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    setisVolumeExpanded(isAllExpanded);
  }, [isAllExpanded]);

  return (
    <div className="mb-6 last:mb-0">
      <VolumeHeader
        volume_info={volume}
        chapterCount={Object.values(volume.chapters).reduce(
          (acc, curr) => acc + curr.length,
          0
        )}
        isExpanded={isVolumeExpanded}
        onClick={toggleVolumeExpanded}
      />

      {Object.entries(volume.chapters)
        .sort(isAscending ? sortChapterAscending : sortChapterDescending)
        .map(([chapterNumber, languageChapters]) => (
          <ChaptersGrid
            key={chapterNumber}
            isVolumeExpanded={isVolumeExpanded}
            isAllExpanded={isAllExpanded}
            chapterNumber={+chapterNumber}
            chapters={languageChapters}
          />
        ))}
    </div>
  );
};

export default VolumeCard;
