import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import TitleCards from "@Manga/components/cards/titleCards/TitleCards";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { mangaTitles } from "@Manga/data/manga.data";
import { MangaTitle } from "@Manga/interfaces/manga.interfaces";
import { MangaViewSelectionType } from "@Manga/types/manga.types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";

const Recent = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedView, setSelectedView] =
    useState<MangaViewSelectionType>("list");

  const handleSelectedViewChage = (selectedItem: MangaViewSelectionType) => {
    setSelectedView(selectedItem);
  };

  return (
    <Container>
      <Section title="Recently Added" hasBack>
        <div className="inline-flex justify-end w-full mt-6 mb-2">
          <MangaViewSelect onSelectedChange={handleSelectedViewChage} />
        </div>
        <TitleCards data={data} selectedView={selectedView} />
      </Section>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: MangaTitle[];
}> = async () => {
  const data = await Promise.resolve(mangaTitles);

  return {
    props: {
      data,
    },
  };
};
export default Recent;
