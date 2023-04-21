import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import TabItem from "@Common/components/tab/TabItem";
import NewButton from "features/my/components/buttons/newButton/NewButton";
import { groupsTabs } from "features/my/data/groups.data";

const Groups = () => {
  return (
    <Container>
      <Section title="My MDLists" hasBack>
        <Tab tabs={groupsTabs} className="mt-6" />
        <NewButton text="New Group" />
        <TabItem id="followed" defaultTab></TabItem>
        <TabItem id="my-groups"></TabItem>
      </Section>
    </Container>
  );
};

export default Groups;
