import { sortAscending, sortDescending } from "@Common/utils/array.util";
import { Chapter } from "@Manga/types/manga.types";

export const sortChapterDescending = (
  [chapterNumberA, _chaptersA]: [string, Chapter[]],
  [chapterNumberB, _chaptersB]: [string, Chapter[]]
) => sortDescending(+chapterNumberA, +chapterNumberB);

export const sortChapterAscending = (
  [chapterNumberA, _chaptersA]: [string, Chapter[]],
  [chapterNumberB, _chaptersB]: [string, Chapter[]]
) => sortAscending(+chapterNumberA, +chapterNumberB);
