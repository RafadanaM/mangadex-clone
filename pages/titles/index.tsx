import { createRef, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import FilterIcon from "@Images/icon/filter.svg";
import IconButton from "@Common/components/button/IconButton";
import Section from "@Common/components/layout/Section";
import Search from "@Common/components/search/Search";
import Dropdown from "@Common/components/dropdown/Dropdown";
import Modal from "@Common/components/modal/Modal";
import Button from "@Common/components/button/Button";
import MangaViewSelection from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { sortData } from "@Manga/data/titles.data";
import { mangaTitles } from "@Manga/data/manga.data";
import { MangaTitle } from "@Manga/interfaces/manga.interfaces";
import { MangaViewSelectionType } from "@Manga/types/manga.types";
import TitleCards from "@Manga/components/cards/titleCards/TitleCards";
import Container from "../../common/components/layout/Container";

const Titles = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [open, setOpen] = useState(false);
  const [selectedView, setSelectedView] =
    useState<MangaViewSelectionType>("list");

  const updateModalOpen = (newState: boolean) => {
    setOpen(newState);
  };

  const handleSelectedViewChanged = (selectedItem: MangaViewSelectionType) => {
    setSelectedView(selectedItem);
  };

  return (
    <Container>
      <Section hasBack title="Advanced Search">
        <div className="flex items-center mt-6">
          <Search />
          <IconButton
            theme="transparent"
            className="ml-2 gap-2"
            buttonType="menu"
            hover
            Icon={FilterIcon}
            text="Filter"
            textClassName="hidden md:inline"
            onClick={() => setOpen(true)}
          />
        </div>
        <div className="flex items-center mt-6">
          <Dropdown title="Sort By" items={sortData} />
          <MangaViewSelection onSelectedChange={handleSelectedViewChanged} />
        </div>
        <Modal open={open} updateOpen={updateModalOpen}>
          <Button>asd</Button>
        </Modal>
        <TitleCards selectedView={selectedView} data={data} />
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

export default Titles;
