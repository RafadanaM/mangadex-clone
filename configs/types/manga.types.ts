import { LatestManga } from "../interfaces/manga.interface";

export const MangaListAppearenceType = {
  grid: "grid",
  list: "list",
  twoCol: "twoCol",
} as const;

export type MangaListAppearenceType =
  typeof MangaListAppearenceType[keyof typeof MangaListAppearenceType];

export type RecentManga = Pick<LatestManga, "image" | "title" | "language">;
