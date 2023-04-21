import NewButton from "@Common/components/button/NewButton";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import { mdListsTabs } from "@Common/data/tab.data";

const Lists = () => {
  return (
    <Container>
      <Section title="My MDLists" hasBack>
        <Tab tabs={mdListsTabs} className="mt-6" />
        <NewButton text="New Lists" />
      </Section>
    </Container>
  );
};

export default Lists;
