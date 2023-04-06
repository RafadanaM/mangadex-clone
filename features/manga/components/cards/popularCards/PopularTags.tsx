import Tag from "../../tag/Tag";

interface IPopularTags {
  tags: string[];
}

const PopularTags = ({ tags }: IPopularTags) => {
  return (
    <div className="hidden md:flex flex-wrap gap-1 overflow-hidden">
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}
    </div>
  );
};

export default PopularTags;
