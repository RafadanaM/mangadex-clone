import type { NextPage } from "next";
import LatestSection from "@Manga/components/sections/LatestSection";
import RecentSection from "@Manga/components/sections/RecentSection";
import SeasonalSection from "../features/manga/components/sections/SeasonalSection";
import PopularSection from "../features/manga/components/sections/PopularSection";
import Container from "../common/components/layout/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <PopularSection />
      <LatestSection />
      <SeasonalSection />
      <RecentSection />
    </Container>
  );
};

export default Home;
