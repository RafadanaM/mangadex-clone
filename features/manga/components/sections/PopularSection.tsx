import Section from "@Common/components/layout/Section";
import PopularCards from "../cards/popularCards/PopularCards";
import { popularData } from "../../data/manga.data";

const PopularSection = () => {
  return (
    <Section title="Popular New Titles" className="section-banner">
      <PopularCards data={popularData} />
    </Section>
  );
};

export default PopularSection;
