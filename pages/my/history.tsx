import { useState } from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import ChaptersCard from "@Manga/components/cards/chapterCards/ChaptersCard";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { mangaChapters } from "@Manga/data/manga.data";
import { MangaViewSelectionType, MangaChapter } from "@Manga/types/manga.types";

const History = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedView, setSelectedView] =
    useState<Extract<MangaViewSelectionType, "list" | "twoCol">>("list");

  const handleSelectedChange = (chosenView: MangaViewSelectionType) => {
    if (chosenView === "grid") return;
    setSelectedView(chosenView);
  };

  return (
    <Container>
      <Section title="Reading History" hasBack>
        <div className="bg-secondary py-4 text-sm text-center rounded">
          Reading history is currently only tracked on your device, and will be
          lost if you log out or clear site data.
        </div>
        <div className="flex mt-6 mb-4">
          <MangaViewSelect
            onSelectedChange={handleSelectedChange}
            viewTypes={["list", "twoCol"]}
          />
        </div>
        <ChaptersCard data={data} type={selectedView} />
      </Section>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: MangaChapter[];
}> = async () => {
  const data = await Promise.resolve(mangaChapters);

  return {
    props: {
      data,
    },
  };
};

export default History;
