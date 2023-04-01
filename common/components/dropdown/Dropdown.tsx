import { MouseEvent, useState } from "react";
import DownIcon from "@Images/icon/chevron-down.svg";
import DropdownItem from "./DropdownItem";

interface IDropdown {
  title: string;
  items: string[];
  defaultItem?: string;
  onItemChange?: (item: string) => void;
}

const Dropdown = ({ title, items, defaultItem, onItemChange }: IDropdown) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    defaultItem ?? (items && items.length > 0 ? items[0] : "")
  );

  const handleItemChange =
    (nextItem: string) => (_event: MouseEvent<HTMLDivElement>) => {
      if (nextItem !== selectedItem) {
        setSelectedItem(nextItem);
        onItemChange?.(nextItem);
      }

      setOpen(false);
    };

  return (
    <div
      className="group relative min-w-[300px] select-none "
      tabIndex={0}
      onBlur={() => setOpen(false)}
    >
      <div
        className="bg-secondary px-4 py-1 flex items-center justify-between cursor-pointer border rounded-t group-focus:border-primary border-transparent"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <div className="flex flex-col justify-between">
          <span className="text-xs mb-1">{title}</span>
          <span>{selectedItem}</span>
        </div>

        <DownIcon
          className={`icon-menu transition-transform 
          ${open ? " transform rotate-180" : ""}`}
        />
      </div>
      {open && (
        <div className="absolute top-full bg-secondary w-full">
          {items.map((item) => (
            <DropdownItem
              key={item}
              text={item}
              isSelected={item === selectedItem}
              onClick={handleItemChange(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
