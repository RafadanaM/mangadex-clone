import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import useMediaQuery from "@Common/hooks/useMediaQuery";
import ChapterCard from "@Manga/components/cards/chapterCards/ChapterCard";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import { MangaViewSelectionType } from "@Manga/types/manga.types";
import type { NextPage } from "next";
import { useState } from "react";

const Updates: NextPage = () => {
  const [isLoadingSmall, isSmall] = useMediaQuery("(min-width:640px)");
  const [isLoadingMedium, isMedium] = useMediaQuery("(min-width:768px)");

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
        <div>
          {!isLoadingSmall ? (
            <ChapterCard
              type={selectedView}
              size={isMedium ? "medium" : isSmall ? "small" : "default"}
            />
          ) : null}
        </div>
      </Section>
    </Container>
  );
};

export default Updates;
