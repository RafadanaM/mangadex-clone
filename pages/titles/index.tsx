import { createRef, useState } from "react";
import { NextPage } from "next";
import FilterIcon from "@Images/icon/filter.svg";
import IconButton from "@Common/components/button/IconButton";
import Section from "@Common/components/layout/Section";
import Search from "@Common/components/search/Search";
import Dropdown from "@Common/components/dropdown/Dropdown";
import Modal from "@Common/components/modal/Modal";
import Button from "@Common/components/button/Button";
import MangaViewSelection from "@Manga/components/mangaViewSelect/MangaViewSelection";
import MangaCards from "@Manga/components/titleCards/TitleCards";
import { sortData } from "@Manga/data/titles.data";
import { mangaTitles } from "@Manga/data/manga.data";

const Titles: NextPage = () => {
  const [open, setOpen] = useState(false);

  const mangaTitlesRefs = mangaTitles.map(() =>
    createRef<HTMLDivElement | null>()
  );

  const updateModalOpen = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <div className="py-2">
      <Section hasBack title="Advanced Search">
        <div className="flex items-center mt-6">
          <Search />
          <IconButton
            className="ml-4"
            hasShade
            type="menu"
            Icon={FilterIcon}
            text="Filter"
            textClassName="md:inline hidden"
            onClick={() => setOpen(true)}
          />
        </div>
        <div className="flex items-center mt-6">
          <Dropdown title="Sort By" items={sortData} />
          <MangaViewSelection />
        </div>
        <Modal open={open} updateOpen={updateModalOpen}>
          <Button>asd</Button>
        </Modal>

        <MangaCards data={mangaTitles} refs={mangaTitlesRefs} />
      </Section>
    </div>
  );
};

export default Titles;
