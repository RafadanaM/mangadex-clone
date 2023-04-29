import { mangaVolumes } from "@MangaDetail/data/mangaDetail.data";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";
import { useEffect, useState } from "react";
import VolumeCard from "./VolumeCard";

const VolumeCards = () => {
  const [volumes, setVolumes] = useState<MangaVolume[]>([]);

  useEffect(() => {
    setVolumes(mangaVolumes);
  }, []);

  return (
    <>
      {volumes.map((volume) => (
        <VolumeCard volume={volume} key={volume.id} />
      ))}
    </>
  );
};

export default VolumeCards;
