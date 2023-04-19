import { useState } from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Section from "@Common/components/layout/Section";
import Container from "@Common/components/layout/Container";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { mangaChapters } from "@Manga/data/manga.data";
import { MangaChapter, MangaViewSelectionType } from "@Manga/types/manga.types";
import ChaptersCard from "@Manga/components/cards/chapterCards/ChaptersCard";

const Updates = ({
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
      <Section title="Updates" hasBack>
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

export default Updates;
