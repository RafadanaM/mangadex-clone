import Link from "next/link";
import { ReactNode } from "react";

interface ITag {
  children: ReactNode;
}

const Tag = ({ children }: ITag) => {
  return (
    <Link href={"/"} passHref>
      <a className="text-[10px] uppercase font-bold px-1.5 rounded bg-white">
        {children}
      </a>
    </Link>
  );
};

export default Tag;
