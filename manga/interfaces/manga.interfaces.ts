import { Language } from "../../common/types/common.types";
import { MangaStatus } from "../types/manga.types";

export interface LatestManga {
  image: string;
  title: string;
  language: Language;
  chapter: string;
  translation_groups: string[];
  uploaded: Date;
  isOfficial: boolean;
}

export interface MangaTitleStats {
  rating: number;
  comments: number;
  views: number;
  followers: number;
}

export interface MangaTitle {
  id: string;
  image: string;
  title: string;
  language: Language;
  author: string;
  tags: string[];
  stats: MangaTitleStats;
  descrpition: string;
  status: MangaStatus;
}
