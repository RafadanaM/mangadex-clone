import { forwardRef, useState } from "react";
import Tag from "../../tag/Tag";

interface ITitleTags {
  tags: string[];
  className?: string;
  showMore: boolean;
}

const TitleTags = forwardRef<HTMLDivElement | null, ITitleTags>(
  function TitleTags({ tags, className = "", showMore }, ref) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClickShowMore() {
      setIsOpen(true);
    }

    const containerStyle = {
      isOpen: isOpen
        ? ""
        : "overflow-y-hidden max-h-[calc(3em_+_0.5rem)] sm:max-h-[1em]",
      showMore: showMore ? "relative pr-9" : "",
    };

    return (
      <div
        ref={ref}
        // setting max height is important to determine when to add MORE button and hide the wrapped elements(how rows that we want), on smaller screen we add 0.25rem to consider gap-1 which is 0.25rem
        className={`flex overflow-y-hidden flex-wrap gap-1 ${containerStyle.showMore} ${containerStyle.isOpen} ${className}`}
      >
        {tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}

        <button
          onClick={handleClickShowMore}
          className={`absolute bottom-0 right-1 text-xs font-bold text-primary ${
            !showMore || isOpen ? "hidden" : ""
          }`}
        >
          MORE
        </button>
      </div>
    );
  }
);

export default TitleTags;
