import ChaptersGrids from "./ChaptersGrids";
import VolumeHeader from "./VolumeHeader";
import useToggle from "@Common/hooks/useToggle";
import useClientRect from "@Common/hooks/useClientRect";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";

interface IVolumeCard {
  volume: MangaVolume;
}

const VolumeCard = ({ volume }: IVolumeCard) => {
  const [isChaptersExpanded, toggleChaptersExpand] = useToggle(true);

  const [rect, gridRef] = useClientRect();

  return (
    <div className="mb-6 last:mb-0">
      <VolumeHeader
        volume_info={volume}
        chapterCount={Object.values(volume.chapters).reduce(
          (acc, curr) => acc + curr.length,
          0
        )}
        isExpanded={isChaptersExpanded}
        onClick={toggleChaptersExpand}
      />

      <ChaptersGrids
        ref={gridRef}
        height={isChaptersExpanded ? rect?.height : 0}
        chapters={volume.chapters}
      />
    </div>
  );
};

export default VolumeCard;
