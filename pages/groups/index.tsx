import Container from "@Common/components/layout/Container";
import Section from "@Common/components/layout/Section";
import Search from "@Common/components/search/Search";

const Groups = () => {
  return (
    <Container>
      <Section title="Search Groups" hasBack>
        <Search className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
      </Section>
    </Container>
  );
};

export default Groups;
