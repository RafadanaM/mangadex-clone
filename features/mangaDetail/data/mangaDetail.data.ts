import { AlternativeTitle } from "@MangaDetail/types/mangaInfo.type";
import { MangaVolume } from "@MangaDetail/types/mangaVolume.type";

export const mangaDetailTabs: Map<string, string> = new Map([
  ["chapters", "Chapters"],
  ["comments", "Comments"],
  ["art", "Art"],
]);

export const alternativeTitles: AlternativeTitle[] = [
  {
    language: "EN",
    title: "Monthly Girls' Nozaki-kun",
  },
  {
    language: "IT",
    title: "Nozaki-kun du mensuel des filles",
  },
  {
    language: "ID",
    title: "Komikus Shojo Nozaki",
  },
];

export const mangaVolumes: MangaVolume[] = [
  {
    id: "1",
    volume_name: "Volume 20",
    startChapter: 201,
    endChapter: 203,

    chapters: {
      203: [
        {
          id: "1",
          title: "Ch. 203.5 Extra",
          group: "Wakga",
          language: "EN",
          uploader: "Maxred",
          uploadTime: new Date(),
        },
      ],
      202: [
        {
          id: "1",
          title: "The Promised Day",
          group: "Wakga",
          language: "EN",
          uploader: "Maxred",
          uploadTime: new Date(),
        },
        {
          id: "2",
          title: "El dia prometido",
          group: "Gk007Scan",
          language: "IT",
          uploader: "AliceShiro",
          uploadTime: new Date("2022-12-10T03:24:00"),
        },
        {
          id: "3",
          title: "O Dia Prometido",
          group: "Dispersion Translations",
          language: "BR",
          uploader: "link",
          uploadTime: new Date("2022-10-17T03:24:00"),
        },
      ],

      201: [
        {
          id: "1",
          title: "Farewell",
          group: "Wakga",
          language: "EN",
          uploader: "Maxred",
          uploadTime: new Date(),
        },
        {
          id: "2",
          title: "Ch.201",
          group: "Gk007Scan",
          language: "EN",
          uploader: "AliceShiro",
          uploadTime: new Date("2022-12-06T03:24:00"),
        },
        {
          id: "3",
          title: "Despedida",
          group: "Dispersion Translations",
          language: "BR",
          uploader: "link",
          uploadTime: new Date("2022-10-17T03:24:00"),
        },
      ],
    },
  },
  {
    id: "2",
    volume_name: "Volume 19",
    startChapter: 198,
    endChapter: 200,
    chapters: {
      200: [
        {
          id: "1",
          title: "The Promised Day",
          group: "Wakga",
          language: "EN",
          uploader: "Maxred",
          uploadTime: new Date(),
        },
        {
          id: "2",
          title: "El dia prometido",
          group: "Gk007Scan",
          language: "IT",
          uploader: "AliceShiro",
          uploadTime: new Date("2022-12-10T03:24:00"),
        },
        {
          id: "3",
          title: "O Dia Prometido",
          group: "Dispersion Translations",
          language: "BR",
          uploader: "link",
          uploadTime: new Date("2022-10-17T03:24:00"),
        },
      ],

      199: [
        {
          id: "1",
          title: "Farewell",
          group: "Wakga",
          language: "EN",
          uploader: "Maxred",
          uploadTime: new Date(),
        },
        {
          id: "2",
          title: "Ch.201",
          group: "Gk007Scan",
          language: "EN",
          uploader: "AliceShiro",
          uploadTime: new Date("2022-12-06T03:24:00"),
        },
        {
          id: "3",
          title: "Despedida",
          group: "Dispersion Translations",
          language: "BR",
          uploader: "link",
          uploadTime: new Date("2022-10-17T03:24:00"),
        },
      ],

      198: [
        {
          id: "1",
          title: "Something Else",
          group: "Wakga",
          language: "EN",
          uploader: "Maxred",
          uploadTime: new Date("2022-10-16T03:24:00"),
        },
      ],
    },
  },
];
