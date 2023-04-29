import { Chapter } from "@Manga/types/manga.types";

export type MangaVolume = {
  id: string;
  volume_name: string;
  startChapter: number;
  endChapter: number;
  chapters: Record<number, Chapter[]>;
};
