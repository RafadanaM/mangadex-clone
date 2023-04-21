import NewButton from "features/my/components/buttons/newButton/NewButton";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import TabItem from "@Common/components/tab/TabItem";
import MDListsCard from "@My/components/mdListCard/MDListsCard";
import { mdListsTabs } from "@My/data/lists.data";

const Lists = () => {
  return (
    <Container>
      <Section title="My MDLists" hasBack>
        <Tab tabs={mdListsTabs} className="mt-6" />
        <NewButton text="New Lists" />
        <TabItem id="my-mdlists" defaultTab>
          <MDListsCard isPrivate />
          <MDListsCard isPrivate={false} />
          <MDListsCard isPrivate />
        </TabItem>
        <TabItem id="followed-mdlists"></TabItem>
      </Section>
    </Container>
  );
};

export default Lists;
