import { LatestManga } from "../interfaces/manga.interfaces";

export const MangaViewSelectionType = {
  grid: "grid",
  list: "list",
  twoCol: "twoCol",
} as const;

export type MangaViewSelectionType =
  typeof MangaViewSelectionType[keyof typeof MangaViewSelectionType];

export type RecentManga = Pick<LatestManga, "image" | "title" | "language">;

export type MangaStatus =
  | "ongoing"
  | "completed"
  | "hiatus"
  | "cancelled"
  | "unknown";
