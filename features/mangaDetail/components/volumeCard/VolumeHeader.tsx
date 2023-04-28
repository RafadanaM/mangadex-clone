import Icon from "@Common/components/icons/Icon";
import useToggle from "@Common/hooks/useToggle";
import ChevronDownIcon from "@Images/icon/chevron-down.svg";

const VolumeHeader = () => {
  const [isChaptersExpanded, toggleChaptersExpand] = useToggle(true);

  return (
    <div
      onClick={toggleChaptersExpand}
      className="flex justify-between mb-2 cursor-pointer"
    >
      <span>Volume 20</span>
      <span>Ch. 196 - 202</span>
      <div>
        22
        <Icon
          icon={ChevronDownIcon}
          className={`inline transition-transform ${
            isChaptersExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default VolumeHeader;
