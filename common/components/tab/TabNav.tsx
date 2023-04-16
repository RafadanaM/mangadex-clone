import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, forwardRef } from "react";

interface ITabNav {
  children: ReactNode;
  active: boolean;
  id: string;
}

const TabNav = forwardRef<HTMLLIElement, ITabNav>(function TabNav(
  { children, id, active },
  ref
) {
  const { query } = useRouter();

  return (
    <li
      ref={ref}
      className={`px-2 py-1 z-10 transition-colors font-bold ${
        active ? "text-white" : "text-secondary-dark"
      }`}
    >
      <Link href={{ query: { ...query, tab: id } }} shallow replace>
        {children}
      </Link>
    </li>
  );
});

export default TabNav;
