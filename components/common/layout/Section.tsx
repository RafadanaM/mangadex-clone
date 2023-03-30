import { ReactNode } from "react";
import IconLink from "../button/IconLink";
import RightArrowIcon from "../../../public/arrow-right.svg";
import BackButton from "../button/BackButton";
interface ISection {
  href?: string;
  title: string;
  children?: ReactNode;
  hasBack?: boolean;
}

const Section = ({ href, title, children, hasBack = false }: ISection) => {
  return (
    <section className="mb-16">
      <div className="flex items-center mb-2 w-full">
        {hasBack && <BackButton />}

        <h2 className="text-2xl font-semibold font-header">{title}</h2>
        {href && (
          <IconLink Icon={RightArrowIcon} href={href} className="ml-auto" />
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
