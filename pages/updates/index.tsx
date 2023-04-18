import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import ChapterCard from "@Manga/components/cards/chapterCards/ChapterCard";
import MangaViewSelect from "@Manga/components/mangaViewSelect/MangaViewSelection";
import type { NextPage } from "next";

const Updates: NextPage = () => {
  return (
    <Container>
      <Section title="Updates" hasBack>
        <div className="flex mt-6 mb-4">
          <MangaViewSelect viewTypes={["list", "twoCol"]} />
        </div>
        <div>
          <ChapterCard />
        </div>
      </Section>
    </Container>
  );
};

export default Updates;
