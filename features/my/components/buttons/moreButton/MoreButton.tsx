import Button from "@Common/components/button/Button";
import IconButton from "@Common/components/button/IconButton";
import useOutsideClick from "@Common/hooks/useOutsideClick";
import MoreIcon from "@Images/icon/more-vertical.svg";
import { useEffect, useState } from "react";

const MoreButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useOutsideClick<HTMLDivElement>(() => setOpenMenu(false));

  useEffect(() => {
    console.log("tun");
  }, [openMenu]);

  function toggleOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <div ref={menuRef} className="relative overflow-visible">
      <IconButton
        Icon={MoreIcon}
        onClick={toggleOpenMenu}
        className="-mt-1.5"
        padding="p-2"
      />
      <div
        className={`bg-secondary absolute -left-6 overflow-hidden shadow-md min-w-[5rem] ${
          openMenu ? "" : "hidden"
        }`}
      >
        <Button
          theme="light"
          padding="py-2 px-3"
          className="min-w-full text-left"
        >
          Follow
        </Button>
        <Button
          theme="light"
          padding="py-2 px-3"
          className="min-w-full text-left"
        >
          Share
        </Button>
        <Button
          theme="light"
          padding="py-2 px-3"
          className="min-w-full text-left"
        >
          Delete
        </Button>
        <Button
          theme="light"
          padding="py-2 px-3"
          className="min-w-full text-left"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default MoreButton;
