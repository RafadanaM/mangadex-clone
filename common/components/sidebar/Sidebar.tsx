import { useRouter } from "next/router";
import CloseIcon from "@Images/icon/x.svg";
import HomeIcon from "@Images/icon/home.svg";
import BookmarkIcon from "@Images/icon/bookmark.svg";
import BookIcon from "@Images/icon/book.svg";
import UsersIcon from "@Images/icon/users.svg";
import PinIcon from "@Images/icon/pin.svg";
import Logo from "../icons/Logo";
import SidebarItem from "./SidebarItem";
import {
  communityData,
  followsData,
  mangadexData,
  titlesData,
} from "../../data/sidebar.data";
import IconButton from "../button/IconButton";
import Overlay from "../modal/Overlay";

interface ISidebar {
  isOpen: boolean;
  updateOpen: (value: boolean) => void;
}

const Sidebar = ({ updateOpen, isOpen }: ISidebar) => {
  const { pathname } = useRouter();

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
              hover
              onClick={() => updateOpen(false)}
            />
          </div>
          <ul className="h-full">
            <SidebarItem
              currPath={pathname}
              title="Home"
              path="/"
              Icon={HomeIcon}
            />
            <SidebarItem
              currPath={pathname}
              title="Follows"
              Icon={BookmarkIcon}
              contents={followsData}
            />
            <SidebarItem
              currPath={pathname}
              title="Titles"
              Icon={BookIcon}
              contents={titlesData}
            />
            <SidebarItem
              currPath={pathname}
              title="Community"
              Icon={UsersIcon}
              contents={communityData}
            />
            <SidebarItem
              currPath={pathname}
              title="MangaDex"
              Icon={PinIcon}
              contents={mangadexData}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
