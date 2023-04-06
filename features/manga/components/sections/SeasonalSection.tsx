import Section from "@Common/components/layout/Section";
import { seasonalData } from "../../data/home.data";
import SeasonalCards from "../cards/seasonalCards/SeasonalCards";

const SeasonalSection = () => {
  return (
    <Section title="Seasonal">
      <SeasonalCards data={seasonalData} />
    </Section>
  );
};

export default SeasonalSection;
