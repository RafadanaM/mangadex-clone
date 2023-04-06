import { forwardRef, useState } from "react";
import Tag from "../../tag/Tag";

interface ITags {
  tags: string[];
  className?: string;
  showMore: boolean;
}

const Tags = forwardRef<HTMLDivElement | null, ITags>(function Tags(
  { tags, className = "", showMore },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickShowMore() {
    setIsOpen(true);
  }

  return (
    <div
      ref={ref}
      // setting max height is important to determine when to add MORE button and hide the wrapped elements(how rows that we want), on smaller screen we add 0.25rem to consider gap-1 which is 0.25rem
      className={`flex overflow-y-hidden max-h-[calc(2em_+_0.25rem)] sm:max-h-[1em] flex-wrap gap-1
      ${showMore ? "relative pr-9 " : ""}
      ${!isOpen ? "overflow-y-hidden" : ""}
      ${className}`}
    >
      {tags.map((tag, idx) => (
        <Tag key={idx}>{tag}</Tag>
      ))}

      <button
        onClick={handleClickShowMore}
        className={`absolute bottom-0 right-1 text-xs font-bold text-primary ${
          !showMore ? "hidden" : ""
        }`}
      >
        MORE
      </button>
    </div>
  );
});

export default Tags;
