import Section from "@Common/components/layout/Section";
import { recentlyAdded } from "../../data/home.data";
import RecentCards from "../cards/recentCards/RecentCards";

const RecentSection = () => {
  return (
    <Section title="Recently Added" href="/recent">
      <RecentCards
        data={[...recentlyAdded, ...recentlyAdded, ...recentlyAdded]}
      />
    </Section>
  );
};

export default RecentSection;
