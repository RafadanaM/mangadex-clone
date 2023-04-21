import NewButton from "features/my/components/buttons/newButton/NewButton";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import { mdListsTabs } from "@Common/data/tab.data";
import TabItem from "@Common/components/tab/TabItem";
import MDListsCard from "features/my/components/mdListCard/MDListsCard";

const Lists = () => {
  return (
    <Container>
      <Section title="My MDLists" hasBack>
        <Tab tabs={mdListsTabs} className="mt-6" />
        <NewButton text="New Lists" />
        <TabItem id="my-mdlists" defaultTab>
          <MDListsCard />
          <MDListsCard />
          <MDListsCard />
        </TabItem>
        <TabItem id="followed-mdlists" defaultTab></TabItem>
      </Section>
    </Container>
  );
};

export default Lists;
