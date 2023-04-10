import { ReactNode } from "react";

interface ITag {
  children: ReactNode;
  bgColor?: "white" | "grey";
}

const Tag = ({ children, bgColor = "white" }: ITag) => {
  return (
    <span
      className={`text-[10px] uppercase font-bold px-1.5 rounded ${
        bgColor === "white" ? "bg-white" : "bg-secondary"
      }`}
    >
      {children}
    </span>
  );
};

export default Tag;
