import Status from "@Manga/components/status/Status";
import Tag from "@Manga/components/tag/Tag";
import { MangaStatus } from "@Manga/types/manga.types";

interface ITags {
  tags: string[];
  status: MangaStatus;
}

const Tags = ({ tags, status }: ITags) => {
  return (
    <div className="flex items-center flex-wrap gap-2">
      {tags.map((tag, id) => (
        <Tag bgColor="grey" key={id}>
          {tag}
        </Tag>
      ))}
      <Status status={status} type="detail" />
    </div>
  );
};

export default Tags;
