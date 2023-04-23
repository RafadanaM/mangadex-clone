import NameCard from "@Common/components/cards/NameCard";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Search from "@Common/components/search/Search";
import { groupNames } from "@Common/data/groups.data";

const Groups = () => {
  return (
    <Container>
      <Section title="Search Groups" hasBack>
        <Search className="my-6" />
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {groupNames.map((groupName) => (
            <NameCard key={groupName} name={groupName} />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default Groups;
