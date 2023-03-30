import Link from "next/link";

interface IIconLlink {
  Icon: any;
  href: string;
  className?: string;
}

const IconLink = ({ Icon, href, className }: IIconLlink) => {
  return (
    <Link href={href}>
      <a className={className}>{Icon && <Icon className="icon-menu" />}</a>
    </Link>
  );
};

export default IconLink;
