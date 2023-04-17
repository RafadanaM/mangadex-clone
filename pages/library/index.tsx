import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import LibraryTabItem from "@Manga/components/libraryTabItem/LibraryTabItem";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { librayTabData } from "@Manga/data/library.data";
import { mangaTitles } from "@Manga/data/manga.data";
import { MangaTitle } from "@Manga/interfaces/manga.interfaces";
import { MangaViewSelectionType } from "@Manga/types/manga.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Library = () => {
  const { query } = useRouter();
  const [data, setData] = useState<MangaTitle[]>([]);
  const [selectedView, setSelectedView] =
    useState<MangaViewSelectionType>("list");

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

  const handleSelectedViewChange = (chosenView: MangaViewSelectionType) => {
    setSelectedView(chosenView);
  };

  return (
    <Container>
      <Section title="Library" hasBack>
        <Tab tabs={librayTabData} />
        <div className="flex items-center justify-between my-4">
          <span className="text-lg">{formatTitle(data.length)}</span>
          <MangaViewSelect onSelectedChange={handleSelectedViewChange} />
        </div>
        <LibraryTabItem
          id="reading"
          defaultTab
          selectedView={selectedView}
          data={data}
        />
        <LibraryTabItem
          id="plan-to-read"
          selectedView={selectedView}
          data={data}
        />
        <LibraryTabItem
          id="completed"
          selectedView={selectedView}
          data={data}
        />
        <LibraryTabItem
          id="re-reading"
          selectedView={selectedView}
          data={data}
        />
        <LibraryTabItem id="dropped" selectedView={selectedView} data={data} />
      </Section>
    </Container>
  );
};

export default Library;
