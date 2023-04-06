import ListIcon from "@Images/icon/list.svg";
import TwoColIcon from "@Images/icon/two-col.svg";
import GridIcon from "@Images/icon/grid.svg";
import { MangaViewSelectionType, PopularManga } from "../types/manga.types";
import { MangaTitle } from "../interfaces/manga.interfaces";

export const mangaViewSelectionData: Record<
  MangaViewSelectionType,
  { icon: any }
> = {
  list: { icon: ListIcon },
  twoCol: { icon: TwoColIcon },
  grid: { icon: GridIcon },
};

export const mangaTitles: MangaTitle[] = [
  {
    id: "3843d4d1-ddde-430e-91d7-7f9a322b1116",
    title: "I Became A College Professor At 14 Years Old, Because I'm A Genius",
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
      "The saucy cohabitation story of an android and an office lady who lives alone.",
  },
];

export const popularData: PopularManga[] = [
  {
    authors: ["Oomi Suzu"],
    cover:
      "https://mangadex.org/covers/b05825a3-9d8e-45bc-a45a-1fe065186b83/b76b81b3-29a1-405d-8e2a-0bb25131a41e.jpg.256.jpg",
    description:
      "Hakobe Narumi is an expressionless high schooler known as Stoney. The highlight of his unnoticeable existence is following posts from the popular selfie poster &quot;Efa&quot; on social media. But it turns out &quot;Efa&quot; is his studious and popular classmate Mitsuha Koto?! The slightly erotic, adolescent, selfie, romantic comedy between an Iron Walled Selfie girl and a stone-faced boy begins!",
    id: "b05825a3-9d8e-45bc-a45a-1fe065186b83",
    tags: ["Romance", "Comedy", "School Life", "Slice of Life"],
    title: "The Secret Girl Through the Filter",
  },
  {
    authors: ["Tachibana Oreco"],
    cover:
      "https://mangadex.org/covers/73ee5c5e-5dcf-472e-8fe1-2affc8e99000/48296167-adcd-4d95-91c8-b6ccdb997589.jpg.256.jpg",
    description:
      "A married couple's love has cooled off, but just a few words might just change everything. (Source: Manga Updates)",
    id: "73ee5c5e-5dcf-472e-8fe1-2affc8e99000",
    tags: ["Romance", "Web Comic", "Slice of Life"],
    title: "Just a Few Words",
  },
  {
    authors: ["Giba-chan"],
    cover:
      "https://mangadex.org/covers/af6f72d6-af16-4974-ac72-c8ca8cb6db58/a27e7aef-d851-4fcb-9a1d-24d3f6d40cc3.jpg.256.jpg",
    description: "",
    id: "af6f72d6-af16-4974-ac72-c8ca8cb6db58",
    tags: ["Web Comic"],
    title: "The State of a Certain Wife.",
  },
  {
    authors: ["Roots", "Munyu"],
    cover:
      "https://mangadex.org/covers/1918983a-1b03-493a-a734-590f4075f5f0/9fe82124-4236-4293-a2fe-9c0b34540295.jpg.256.jpg",
    description:
      "Toshi, an ordinary high school student, spent his days being fed and taught by a beautiful neighbor named Yuu-neesan, who lived near his house instead of his parents, who were rarely home. The older sister was kind and perfect as an adult. However, she had a hidden side in that her personality changed completely when it came to games... Games aren't just for fun! Big sister gets angry, gets naked and spares no means! Toshi gets caught up in the duality of her personality! Here begins a surprising new erotic comedy with games and a big sister!",
    id: "1918983a-1b03-493a-a734-590f4075f5f0",
    tags: ["Romance", "Comedy", "Video Games", "Harem", "Slice of Life"],
    title:
      "My &quot;Onee-chan's&quot; Personality Changes When She Plays Games",
  },
  {
    authors: ["Nishima Gomeyuki"],
    cover:
      "https://mangadex.org/covers/d6efdc29-2cdd-4b9b-9c41-7347c2445e13/1e69ae8f-b929-4c0a-8876-a4285dd9f3cd.jpg.256.jpg",
    description: "",
    id: "d6efdc29-2cdd-4b9b-9c41-7347c2445e13",
    tags: [
      "Time Travel",
      "Romance",
      "Comedy",
      "School Life",
      "Web Comic",
      "Slice of Life",
    ],
    title: "The Manager of the Baseball Club Is Strict Only With Me",
  },
  {
    authors: ["Date Shinobu"],
    cover:
      "https://mangadex.org/covers/82fe7808-c051-47e4-8ad2-4d37ffddd926/8a7fc897-21ce-41d7-8018-ac8e39ef3e4b.jpg.256.jpg",
    description: "",
    id: "82fe7808-c051-47e4-8ad2-4d37ffddd926",
    tags: ["Romance", "Drama", "Web Comic"],
    title:
      "A Story About an Elementary School Student Who Wants to Confess His Feelings to His Childhood Friend While Growing Up Beautifully Each Chapter.",
  },
  {
    authors: ["Ayano", "Mogami Kouji"],
    cover:
      "https://mangadex.org/covers/9b12ac90-9407-4fe8-9de8-c8f4fe65df6f/4595bda1-733e-442e-93f5-0205770592b2.png.256.jpg",
    description:
      "More than ten years have passed since a means of transporting individuals from Earth to another world was developed. High school student Kakeru Satomi was taught survival techniques and wisdom by his mountain-dwelling grandfather. Kakeru was sent to another world together with 100 other adventurers of the same age in order to take part in a training program to become an adventurer, but the portal device that linked Earth and the other world vanished right after their transfer...! With the way back to Earth blocked, thus began a dangerous life of survival on an uninhabited island in another world!! [Web Novel](https://novel18.syosetu.com/n7758hj/)  (JP 18+)",
    id: "9b12ac90-9407-4fe8-9de8-c8f4fe65df6f",
    tags: [
      "Action",
      "Romance",
      "Comedy",
      "Survival",
      "Adventure",
      "Harem",
      "Isekai",
      "Fantasy",
      "Adaptation",
    ],
    title: "Easy Survival in Another World",
  },
  {
    authors: ["Hamita"],
    cover:
      "https://mangadex.org/covers/10b8bb96-3b6a-4edc-a428-ddd3e88c3a63/674818e2-fcd5-41dd-a1a7-1d75f5f0c06f.png.256.jpg",
    description:
      "This might or might not become serialized.Apparently, the name of the series is just &quot;Robo Maid&quot;.",
    id: "10b8bb96-3b6a-4edc-a428-ddd3e88c3a63",
    tags: [
      "Sci-Fi",
      "Romance",
      "Comedy",
      "Doujinshi",
      "Web Comic",
      "Slice of Life",
    ],
    title: "Robo Maid ga Kanjou Yutaka ni Naru Hanashi",
  },
  {
    authors: ["Tomoaki Amagi", "Nitra Noi"],
    cover:
      "https://mangadex.org/covers/973d1413-405f-471d-b7c5-25085f2d7b1b/22f4c867-607c-4037-b68f-a5dbcbe6d824.png.256.jpg",
    description:
      "Alexander, whose hometown was destroyed by the demon race, fought with the Demon King and was killed. But instead of the afterlife welcoming him, when he opened his eyes, he was reborn as the Demon King's son, Jilbagias!? While hiding his true identity, he stains his hands with atrocities as he conducts himself as the ideal demon prince, increasing his power to ultimately overthrow the Demon Kingdom...",
    id: "973d1413-405f-471d-b7c5-25085f2d7b1b",
    tags: [
      "Reincarnation",
      "Loli",
      "Action",
      "Demons",
      "Comedy",
      "Adventure",
      "Sexual Violence",
      "Gore",
      "Fantasy",
      "Monster Girls",
      "Adaptation",
    ],
    title:
      "Seventh Demon Prince Jilbagias' Chronicle of Overthrowing the Demon Kingdom",
  },
  {
    authors: ["Jii"],
    cover:
      "https://mangadex.org/covers/0ba5e441-ca41-4a30-94a4-bc8a9fb67f36/a8b63f0e-2030-441a-841a-b11ccb350e9a.jpg.256.jpg",
    description: "",
    id: "0ba5e441-ca41-4a30-94a4-bc8a9fb67f36",
    tags: ["Romance", "Comedy", "Web Comic", "Slice of Life"],
    title: "Imouto Dekiaichuu",
  },
];
