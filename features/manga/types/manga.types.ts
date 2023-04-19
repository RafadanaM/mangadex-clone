import { Language } from "@Common/types/common.types";
import { LatestManga, MangaTitle } from "../interfaces/manga.interfaces";

export const MangaViewSelectionType = {
  grid: "grid",
  list: "list",
  twoCol: "twoCol",
} as const;

export type MangaViewSelectionType =
  typeof MangaViewSelectionType[keyof typeof MangaViewSelectionType];

export type RecentManga = Pick<LatestManga, "image" | "title" | "language">;

export type SeasonalManga = {
  id: string;
  title: string;
  description: string;
  image: string;
  language: Language;
};

export type PopularManga = {
  id: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
  authors: string[];
};

export type MangaChapter = Pick<
  MangaTitle,
  "language" | "id" | "title" | "image"
> & {
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  uploadTime: Date;
  group: string;
  uploader: string;
  language: Language;
};

export type MangaStatus =
  | "ongoing"
  | "completed"
  | "hiatus"
  | "cancelled"
  | "unknown";
