import { useRouter } from "next/router";
import CloseIcon from "../../../../public/x.svg";
import HomeIcon from "../../../../public/home.svg";
import BookmarkIcon from "../../../../public/bookmark.svg";
import BookIcon from "../../../../public/book.svg";
import UsersIcon from "../../../../public/users.svg";
import PinIcon from "../../../../public/pin.svg";
import Logo from "../../icons/Logo";
import SidebarItem from "./SidebarItem";
import {
  communityData,
  followsData,
  mangadexData,
  titlesData,
} from "../../../../data/sidebar.data";
import IconButton from "../../button/IconButton";

import Overlay from "../Overlay";

interface ISidebar {
  isOpen: boolean;
  updateOpen: (value: boolean) => void;
}

const Sidebar = ({ updateOpen, isOpen }: ISidebar) => {
  const { pathname } = useRouter();

  const closeSidebar = () => {
    updateOpen(false);
  };

  return (
    <>
      <Overlay
        isOpen={isOpen}
        onOverlayClick={updateOpen}
        openStyle="lg:hidden"
      />
      <div
        className={`z-50 fixed top-0 left-0 bg-secondary h-full transition-all overflow-hidden ${
          isOpen
            ? "w-64 shadow-[inset_-25px_0_9px_-25px_rgba(0,0,0,0.1)]"
            : "w-0"
        }`}
      >
        <div className="h-full flex flex-col items-stretch p-4">
          <div className="flex flex-shrink-0 justify-between">
            <Logo />
            <IconButton
              className="hidden lg:inline-block"
              Icon={CloseIcon}
              hasShade
              onClick={() => updateOpen(false)}
            />
          </div>
          <ul className="h-full">
            <SidebarItem
              currPath={pathname}
              title="Home"
              path="/"
              Icon={HomeIcon}
              closeSidebar={closeSidebar}
            />
            <SidebarItem
              currPath={pathname}
              title="Follows"
              Icon={BookmarkIcon}
              contents={followsData}
              closeSidebar={closeSidebar}
            />
            <SidebarItem
              currPath={pathname}
              title="Titles"
              Icon={BookIcon}
              contents={titlesData}
              closeSidebar={closeSidebar}
            />
            <SidebarItem
              currPath={pathname}
              title="Community"
              Icon={UsersIcon}
              contents={communityData}
              closeSidebar={closeSidebar}
            />
            <SidebarItem
              currPath={pathname}
              title="MangaDex"
              Icon={PinIcon}
              contents={mangadexData}
              closeSidebar={closeSidebar}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
