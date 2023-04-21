import { MouseEventHandler } from "react";
import PlusIcon from "@Images/icon/plus.svg";
import IconButton from "@Common/components/button/IconButton";

interface INewButton {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NewButton = ({ text, onClick }: INewButton) => {
  return (
    <IconButton
      Icon={PlusIcon}
      text={text}
      theme="light"
      round={false}
      padding="p-2"
      onClick={onClick}
      className="w-full border border-dashed border-shade my-4"
    />
  );
};

export default NewButton;
