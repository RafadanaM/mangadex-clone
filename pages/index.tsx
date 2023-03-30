import type { NextPage } from "next";
import LatestSection from "../components/home/latest/LatestSection";
import RecentSection from "../components/home/recent/RecentSection";

const Home: NextPage = () => {
  return (
    <div className="flex-grow">
      <div className="bg-primary rounded py-4 px-6 text-white flex items-center justify-center mt-2 mb-4">
        MangaDex is still in early access-bugs are to be expected.
      </div>

      <LatestSection />
      <RecentSection />
    </div>
  );
};

export default Home;
