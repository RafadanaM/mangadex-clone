import { MangaShop, MangaTrack } from "@MangaDetail/types/mangaInfo.type";

export const getDomain = (name: MangaShop | MangaTrack): string => {
  switch (name) {
    case "Amazon":
      return "amazon.com.au";
    case "Book☆Walker":
      return "global.bookwalker.jp";
    case "Kitsu":
      return "kitsu.io";
    case "MangaUpdates":
      return "mangaupdates.com";
    case "MyAnimeList":
      return "myanimelist.net";
    default:
      return "";
  }
};
