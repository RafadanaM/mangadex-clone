import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import LibraryTabItem from "@Manga/components/libraryTabItem/LibraryTabItem";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { librayTabData } from "@Manga/data/library.data";
import { mangaTitles } from "@Manga/data/manga.data";
import { MangaTitle } from "@Manga/interfaces/manga.interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Library = () => {
  const { query } = useRouter();
  const [data, setData] = useState<MangaTitle[]>([]);

  useEffect(() => {
    if (typeof query.tab === "string" && query.tab !== "dropped") {
      setData(mangaTitles);
    } else {
      setData([]);
    }
  }, [query.tab]);

  const formatTitle = (length: number) => {
    const count = length > 0 ? length.toString() : "No";
    const title = length === 1 ? "Title" : "Titles";
    return `${count} ${title}`;
  };

  return (
    <Container>
      <Section title="Library" hasBack>
        <Tab tabs={librayTabData} />
        <div className="flex items-center justify-between my-4">
          <span className="text-lg">{formatTitle(data.length)}</span>
          <MangaViewSelect />
        </div>
        <LibraryTabItem id="reading" defaultTab />
        <LibraryTabItem id="plan-to-read" />
        <LibraryTabItem id="completed" />
        <LibraryTabItem id="re-reading" />
        <LibraryTabItem id="dropped" />
      </Section>
    </Container>
  );
};

export default Library;
