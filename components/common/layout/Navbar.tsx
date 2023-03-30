import SideBarIcon from "../../../public/filter-left.svg";
import PersonIcon from "../../../public/person.svg";
import IconButton from "../button/IconButton";
import SearchIcon from "../../../public/search.svg";
import Search from "../Search";
import Container from "./Container";

import Logo from "../icons/Logo";

interface INavbar {
  showIcon: boolean;
  onIconClick: (value: boolean) => void;
}

const Navbar = ({ showIcon, onIconClick }: INavbar) => {
  return (
    <div className="sticky top-0 py-2 bg-white z-20">
      <Container className="h-full flex items-center">
        {showIcon && (
          <>
            <IconButton
              hasShade
              className="mr-2"
              Icon={SideBarIcon}
              onClick={() => onIconClick(true)}
            />
            <Logo />
          </>
        )}
        <Search className="ml-auto hidden sm:flex max-w-[300px]" />
        <button className="ml-auto rounded transition-colors hover:bg-secondary sm:hidden">
          <SearchIcon className="icon" />
        </button>

        <IconButton className="ml-2 bg-secondary" Icon={PersonIcon} />
      </Container>
    </div>
  );
};

export default Navbar;
