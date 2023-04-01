import ListIcon from "@Images/icon/list.svg";
import TwoColIcon from "@Images/icon/two-col.svg";
import GridIcon from "@Images/icon/grid.svg";
import { MangaViewSelectionType } from "../types/manga.types";
import { MangaTitle } from "../interfaces/manga.interfaces";

export const mangaViewSelectionData: Record<
  MangaViewSelectionType,
  { icon: any; index: number }
> = {
  list: { index: 0, icon: ListIcon },
  twoCol: { index: 1, icon: TwoColIcon },
  grid: { index: 2, icon: GridIcon },
};

export const mangaTitles: MangaTitle[] = [
  {
    id: "3843d4d1-ddde-430e-91d7-7f9a322b1116",
    title: "Tokyo Aliens",
    status: "completed",
    author: "Naoe",
    language: "EN",
    image:
      "https://mangadex.org/covers/3843d4d1-ddde-430e-91d7-7f9a322b1116/647a0bf5-5576-4b06-a6b9-ceec45ecfc42.jpg.256.jpg",
    tags: ["sci-fi", "action", "schoollife", "police", "aliens"],
    stats: {
      comments: 120,
      followers: 1231,
      rating: 8.2,
      views: -1,
    },
    descrpition:
      "The cross-dressing Murong Zi became a thief but what she didn't expect was to be stolen from herself! She cannot forgive her favorite thing being stolen from her, so she disguised herself as a man and traced the thief to a brothel where she unexpectedly walked into the bedroom of a beautiful woman. Without a moment to think, she was kidnapped and became the woman's personal servant and was raised like a pet. What was even more unexpected was that the beauty was actually a man! And so, a crazy love story begins.",
  },
  {
    id: "3843d4d1-ddde-430e-91d7-7f9a322b1116",
    title: "Tokyo Aliens",
    author: "Naoe",
    status: "ongoing",
    language: "EN",
    stats: {
      comments: 120,
      followers: 1231,
      rating: 8.2,
      views: -1,
    },
    image:
      "https://mangadex.org/covers/3843d4d1-ddde-430e-91d7-7f9a322b1116/647a0bf5-5576-4b06-a6b9-ceec45ecfc42.jpg.256.jpg",
    tags: ["sci-fi", "action", "schoollife", "police", "aliens"],

    descrpition:
      "Gunji Akira, who has just started high school, has been chasing after his father's ghost by trying to become a police officer just like him. One day however, he has a surprise encounter with an alien while leaving school. And there begins the start of his fateful adventures with extraterrestrial life… \n Note: It runs in a seinen magazine and will not be BL. At most, just as Fujobait as any shounen sports manga.",
  },
  {
    id: "3843d4d1-ddde-430e-91d7-7f9a322b1116",
    title: "Tokyo Aliens",
    author: "Naoe",
    status: "hiatus",
    language: "EN",
    stats: {
      followers: 11200,
      comments: 120,
      rating: 8.2,
      views: -1,
    },
    image:
      "https://mangadex.org/covers/3843d4d1-ddde-430e-91d7-7f9a322b1116/647a0bf5-5576-4b06-a6b9-ceec45ecfc42.jpg.256.jpg",
    tags: ["sci-fi", "action", "schoollife", "police", "aliens"],

    descrpition:
      "Gunji Akira, who has just started high school, has been chasing after his father's ghost by trying to become a police officer just like him. One day however, he has a surprise encounter with an alien while leaving school. And there begins the start of his fateful adventures with extraterrestrial life… \n Note: It runs in a seinen magazine and will not be BL. At most, just as Fujobait as any shounen sports manga.",
  },

  {
    id: "3843d4d1-ddde-430e-91d7-7f9a322b1116",
    title: "Tokyo Aliens",
    author: "Naoe",
    status: "unknown",
    language: "EN",
    stats: {
      followers: 11200,
      comments: 120,
      rating: 8.2,
      views: -1,
    },
    image:
      "https://mangadex.org/covers/3843d4d1-ddde-430e-91d7-7f9a322b1116/647a0bf5-5576-4b06-a6b9-ceec45ecfc42.jpg.256.jpg",
    tags: ["sci-fi", "action", "schoollife", "police", "aliens"],

    descrpition:
      "Gunji Akira, who has just started high school, has been chasing after his father's ghost by trying to become a police officer just like him. One day however, he has a surprise encounter with an alien while leaving school. And there begins the start of his fateful adventures with extraterrestrial life… \n Note: It runs in a seinen magazine and will not be BL. At most, just as Fujobait as any shounen sports manga.",
  },
];
