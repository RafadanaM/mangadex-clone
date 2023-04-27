import { ReactNode } from "react";
import RightArrowIcon from "@Images/icon/arrow-right.svg";
import IconLink from "../button/IconLink";
import BackButton from "../button/BackButton";
interface ISection {
  href?: string;
  title: string;
  className?: string;
  children?: ReactNode;
  hasBack?: boolean;
}

const Section = ({
  href,
  title,
  children,
  hasBack = false,
  className = "",
}: ISection) => {
  return (
    <section className={`mb-8 sm:mb-16 ${className}`}>
      <div className="flex items-center sm:mb-4 w-full">
        {hasBack && <BackButton />}

        <h2 className="text-xl sm:text-2xl font-semibold font-header">
          {title}
        </h2>
        {href && (
          <IconLink Icon={RightArrowIcon} href={href} className="ml-auto" />
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
