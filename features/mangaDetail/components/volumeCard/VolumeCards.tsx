import { mangaVolumes } from "@MangaDetail/data/mangaDetail.data";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";
import { useEffect, useState } from "react";
import VolumeCard from "./VolumeCard";
import { sortAscending, sortDescending } from "@Common/utils/array.util";
import useToggle from "@Common/hooks/useToggle";
import Button from "@Common/components/button/Button";

const VolumeCards = () => {
  const [volumes, setVolumes] = useState<MangaVolume[]>([]);
  const [isAllExpanded, toggleIsAllExpanded] = useToggle(true);
  const [isAscending, toggleIsAscending] = useToggle();

  useEffect(() => {
    setVolumes(mangaVolumes);
  }, []);

  return (
    <>
      <div className="flex gap-4 mb-4">
        <Button
          onClick={toggleIsAscending}
          theme="secondary"
          padding="px-3 py-1"
          className="text-sm"
        >
          {isAscending ? "Ascending" : "Descending"}
        </Button>
        <Button
          theme="secondary"
          padding="px-3 py-1"
          className="ml-auto text-sm"
        >
          Mark All Page as Read
        </Button>
        <Button
          onClick={toggleIsAllExpanded}
          theme="secondary"
          padding="px-3 py-1"
          className="text-sm"
        >
          {isAllExpanded ? "Collapse" : "Expand"}
        </Button>
      </div>
      {volumes
        .sort((a, b) =>
          isAscending
            ? sortAscending(a.startChapter, b.startChapter)
            : sortDescending(a.startChapter, b.startChapter)
        )
        .map((volume) => (
          <VolumeCard
            volume={volume}
            key={volume.id}
            isAllExpanded={isAllExpanded}
            isAscending={isAscending}
          />
        ))}
    </>
  );
};

export default VolumeCards;
