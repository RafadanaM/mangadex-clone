import { LatestManga } from "../interfaces/manga.interfaces";
import { RecentManga } from "../types/manga.types";

const latestUpdates: LatestManga[] = [
  {
    title: "Junketsu no Maria Exhibition",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Vol. 1 Ch. 4 - Maria",
    language: "ID",
    uploaded: new Date("2022-11-03T03:24:00"),

    translation_groups: [],
    isOfficial: false,
  },
  {
    title: "Fairy Tail",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Vol.1 Ch.2 = Master Appears!",
    language: "EN",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["INKR Comics"],
    isOfficial: true,
  },
  {
    title: "Ao Ashi",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Ch. 310 - Después del partido",
    language: "IT",
    uploaded: new Date("2022-11-06T00:24:00"),
    translation_groups: ["Nato 012 Fansub"],
    isOfficial: false,
  },
  {
    title: "Ming Dynasty's Prodigal Son",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Ch. 34 - All-Knowing Jipan",
    language: "EN",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["Bilibili Comics"],
    isOfficial: true,
  },
  {
    title: "Sounds Like Roses",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Vol.1 Ch. 5",
    language: "EN",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["Wisteria Villosa"],
    isOfficial: false,
  },
  {
    title: "Kanojo mo Kanojo",
    image:
      "https://mangadex.org/covers/9bf8c6ee-b735-4e3f-966e-6a31bc03aa24/a12b0d2c-311b-4947-b0d6-b812b521170b.png.256.jpg",

    chapter: "Ch. 114 - Encontro com a Shino, Parte 1",
    language: "BR",
    uploaded: new Date("2022-10-17T03:24:00"),
    translation_groups: ["Bakayarou Scanlator", "Albus Cattus Scanlations"],
    isOfficial: false,
  },
];

const recentlyAdded: RecentManga[] = [
  {
    title: "Junketsu no Maria Exhibition",
    language: "EN",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Fairy Tail",
    language: "BR",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Ao Ashi",
    language: "IT",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Ming Dynasty's Prodigal Son",
    language: "ID",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Sounds Like Roses",
    language: "EN",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
  {
    title: "Kanojo mo Kanojo",
    language: "BR",
    image:
      "https://mangadex.org/covers/55013de8-d135-4e5d-a865-3b6796df13f3/d1185b92-e312-450d-befe-3560dc257cb4.jpg.256.jpg",
  },
];

export { latestUpdates, recentlyAdded };
