import { ReactNode } from "react";

interface ITag {
  children: ReactNode;
}

const Tag = ({ children }: ITag) => {
  return (
    <span className="text-[10px] uppercase font-bold px-1.5 rounded bg-white">
      {children}
    </span>
  );
};

export default Tag;
