import { NextPage } from "next";
import FilterIcon from "../../public/filter.svg";
import IconButton from "../../components/common/button/IconButton";
import Section from "../../components/common/layout/Section";
import Search from "../../components/common/Search";
import Dropdown from "../../components/common/dropdown/Dropdown";
import { sortData } from "../../data/titles.data";
import MangaListAppearence from "../../components/manga/MangaListAppearence";
import { useState } from "react";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/button/Button";

const Titles: NextPage = () => {
  const [open, setOpen] = useState(false);

  const updateModalOpen = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <div className="py-2">
      <Section hasBack title="Advanced Search">
        <div className="flex items-center mt-2">
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
        <div className="flex items-center mt-2">
          <Dropdown title="Sort By" items={sortData} />
          <MangaListAppearence />
        </div>
        <Modal open={open} updateOpen={updateModalOpen}>
          <Button>asd</Button>
        </Modal>
      </Section>
    </div>
  );
};

export default Titles;
