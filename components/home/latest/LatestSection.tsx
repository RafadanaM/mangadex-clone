import React from "react";
import { latestUpdates } from "../../../data/home.data";
import Section from "../../common/layout/Section";
import LatestCards from "./LatestCards";

const LatestSection = () => {
  return (
    <Section title="Latest Updates" href="/latest">
      <div className="grid gap-x-6 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 ">
        {[latestUpdates, latestUpdates, latestUpdates, latestUpdates].map(
          (data, i) => (
            <LatestCards
              key={i}
              data={data}
              className={`${i !== 0 ? "hidden" : ""} ${
                i == 1
                  ? "lg:block"
                  : i == 2
                  ? "2xl:block"
                  : i > 2
                  ? "3xl:block"
                  : ""
              }`}
            />
          )
        )}
      </div>
    </Section>
  );
};

export default LatestSection;
