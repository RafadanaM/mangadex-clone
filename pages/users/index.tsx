import NameCard from "@Common/components/cards/NameCard";
import Dropdown from "@Common/components/dropdown/Dropdown";
import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Search from "@Common/components/search/Search";
import { sortItems, userNames } from "@Common/data/users.data";

const Users = () => {
  return (
    <Container>
      <Section title="Search Users" hasBack>
        <Search className="sm:mt-6" />
        <div className="my-4 sm:my-6">
          <Dropdown title="Sort By" items={sortItems} />
        </div>
        <div className="grid gap-1 sm:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userNames.map((groupName) => (
            <NameCard key={groupName} name={groupName} role="Member" />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default Users;
