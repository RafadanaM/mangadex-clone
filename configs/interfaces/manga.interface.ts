import { Language } from "../types/types";

export interface LatestManga {
  image: string;
  title: string;
  language: Language;
  chapter: string;
  translation_groups: string[];
  uploaded: Date;
  isOfficial: boolean;
}
