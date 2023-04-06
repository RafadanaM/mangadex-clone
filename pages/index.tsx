import type { NextPage } from "next";
import LatestSection from "@Manga/components/sections/LatestSection";
import RecentSection from "@Manga/components/sections/RecentSection";
import SeasonalSection from "../features/manga/components/sections/SeasonalSection";
import PopularSection from "../features/manga/components/sections/PopularSection";

const Home: NextPage = () => {
  return (
    <div className="flex-grow">
      <PopularSection />
      <LatestSection />
      <SeasonalSection />
      <RecentSection />
    </div>
  );
};

export default Home;
