import ChaptersGrids from "./ChaptersGrids";
import VolumeHeader from "./VolumeHeader";
import useClientRect from "@Common/hooks/useClientRect";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";
import { useEffect, useState } from "react";

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

  const [rect, gridRef] = useClientRect();

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

      <ChaptersGrids
        ref={gridRef}
        // height={isVolumeExpanded ? rect?.height : 0}
        isVolumeExpanded={isVolumeExpanded}
        chapters={volume.chapters}
        isAllExpanded={isAllExpanded}
        isAscending={isAscending}
      />
    </div>
  );
};

export default VolumeCard;
