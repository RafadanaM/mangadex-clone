import Link from "next/link";

interface IIconLlink {
  Icon: any;
  href: string;
  className?: string;
}
const IconLink = ({ Icon, href, className }: IIconLlink) => {
  return (
    <Link href={href}>
      <a
        className={`hover:bg-shade hover:bg-opacity-20 rounded-full ${className}`}
      >
        {Icon && <Icon className="icon-link" />}
      </a>
    </Link>
  );
};

export default IconLink;
