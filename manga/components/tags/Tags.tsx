import { forwardRef, useState } from "react";
import Tag from "./Tag";

interface ITags {
  tags: string[];
  className?: string;
  showMore: boolean;
}

const Tags = forwardRef<HTMLDivElement | null, ITags>(function Tags(
  { tags, className = "", showMore },
  ref
) {
  const [isShowMore, setIsShowMore] = useState(false);

  function handleClickShowMore() {
    setIsShowMore(true);
  }

  return (
    <div
      ref={ref}
      className={`flex flex-wrap gap-1 ${
        showMore && !isShowMore
          ? "overflow-y-hidden relative pr-10 max-h-[1em]"
          : ""
      } ${className}`}
    >
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}
      {showMore && (
        <button
          onClick={handleClickShowMore}
          className="block absolute top-0 right-0 text-sm font-bold text-primary w-12 leading-4"
        >
          More
        </button>
      )}
    </div>
  );
});

export default Tags;
