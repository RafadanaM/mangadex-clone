import SideBarIcon from "@Images/icon/filter-left.svg";
import PersonIcon from "@Images/icon/person.svg";
import SearchIcon from "@Images/icon/search.svg";
import IconButton from "../button/IconButton";
import Search from "../search/Search";
import Container from "./Container";
import Logo from "../icons/Logo";
import { useRouter } from "next/router";

interface INavbar {
  showIcon: boolean;
  onIconClick: (value: boolean) => void;
}

const Navbar = ({ showIcon, onIconClick }: INavbar) => {
  const { pathname } = useRouter();

  const shouldTransparent =
    pathname === "/titles/[id]" || pathname === "/titles/[id]/[name]";

  return (
    <div
      className={`sticky h-nav top-0 py-2 bg-white ${
        shouldTransparent ? "bg-transparent" : "bg-white"
      } z-20`}
    >
      <Container className="h-full flex items-center">
        {showIcon && (
          <>
            <IconButton
              buttonType="menu"
              hover
              theme={shouldTransparent ? "transparent" : "light"}
              onClick={() => onIconClick(true)}
              className="mr-2"
              Icon={SideBarIcon}
            />
            <Logo />
          </>
        )}
        <Search className="ml-auto hidden sm:flex max-w-[300px]" />
        <button className="ml-auto rounded transition-colors hover:bg-secondary sm:hidden">
          <SearchIcon className="icon" />
        </button>

        <IconButton
          className="ml-2"
          buttonType="menu"
          hover={false}
          Icon={PersonIcon}
        />
      </Container>
    </div>
  );
};

export default Navbar;
