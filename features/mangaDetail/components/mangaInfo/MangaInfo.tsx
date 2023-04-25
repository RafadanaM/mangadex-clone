import {
  MangaShop,
  MangaTrack,
  isMangaShop,
  isMangaTrack,
} from "@MangaDetail/types/mangaInfo.type";
import { getDomain } from "@MangaDetail/util/mangaInfo.util";
import Image from "next/future/image";

interface IMangaInfo {
  title: string;
  infos: (string | MangaShop | MangaTrack)[];
}

const MangaInfo = ({ title, infos }: IMangaInfo) => {
  return (
    <div className="capitalize">
      <span className="inline-block font-bold text-icon mb-2">{title}</span>
      <div className="flex gap-2 flex-wrap">
        {infos.map((info) => {
          let Icon;
          if (isMangaShop(info) || isMangaTrack(info)) {
            Icon = (
              <Image
                key={info}
                src={`http://www.google.com/s2/favicons?domain=${getDomain(
                  info
                )}`}
                alt="icon"
                height={16}
                width={16}
                className="group-hover:bg-white"
              />
            );
          }

          return (
            <div
              key={info}
              className="flex group items-center bg-secondary gap-1.5 px-2 py-1 text-xs rounded cursor-pointer hover:bg-primary hover:text-white"
            >
              {Icon && Icon}
              <span>{info}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MangaInfo;
