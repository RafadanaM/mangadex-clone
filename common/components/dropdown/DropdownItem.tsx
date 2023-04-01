import React, { MouseEventHandler } from "react";

interface IDropdownItem extends React.HTMLProps<HTMLDivElement> {
  text: string;
  isSelected: boolean;
}

const DropdownItem = ({ text, isSelected, ...props }: IDropdownItem) => {
  return (
    <div
      className={`cursor-pointer hover:bg-shade-light px-4 py-2
       ${isSelected ? "bg-shade-light" : ""}`}
      {...props}
    >
      {text}
    </div>
  );
};

export default DropdownItem;
