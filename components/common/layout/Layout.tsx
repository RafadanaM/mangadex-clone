import { ReactNode, useState } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleUpdateSidebar = (value: boolean) => {
    setIsSidebarOpen(value);
  };

  return (
    <div className="flex flex-grow">
      <Sidebar isOpen={isSidebarOpen} updateOpen={handleUpdateSidebar} />
      <div
        className={`w-full transition-all ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        <Navbar showIcon={!isSidebarOpen} onIconClick={handleUpdateSidebar} />
        <Container className="flex flex-col flex-grow">{children}</Container>
      </div>
    </div>
  );
};

export default Layout;
