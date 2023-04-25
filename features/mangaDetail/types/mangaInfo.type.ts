const mangaShops = ["Amazon", "Book☆Walker"] as const;
export type MangaShop = (typeof mangaShops)[number];
export const isMangaShop = (x: any): x is MangaShop => mangaShops.includes(x);

const mangaTracks = ["MangaUpdates", "Kitsu", "MyAnimeList"] as const;
export type MangaTrack = (typeof mangaTracks)[number];
export const isMangaTrack = (x: any): x is MangaTrack =>
  mangaTracks.includes(x);
