import BaseCard from "@Common/components/cards/BaseCard";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Tab from "@Common/components/tab/Tab";
import TabItem from "@Common/components/tab/TabItem";
import NewButton from "@My/components/buttons/newButton/NewButton";
import GroupCard from "@My/components/groupCard/GroupCard";
import { groupsTabs } from "@My/data/groups.data";

const Groups = () => {
  return (
    <Container>
      <Section title="My MDLists" hasBack>
        <Tab tabs={groupsTabs} className="mt-6" />
        <NewButton text="New Group" />
        <TabItem id="followed" defaultTab>
          <GroupCard />
        </TabItem>
        <TabItem id="my-groups">
          <BaseCard className="py-4 text-center">
            <span>{"You aren't part of any groups."}</span>
          </BaseCard>
        </TabItem>
      </Section>
    </Container>
  );
};

export default Groups;
