"use client";

import "./index.scss";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import isActive from "@/lib/active-pathname";

interface MenuItemProps {
  href: string;
  text: string;
}

const menuItems = [
  { href: "/getting-started", text: "Getting Started" },
  { href: "/responsive-design", text: "Responsive Design" },
  { href: "/usage-scenarios", text: "Usage Scenarios" },
  { href: "/grid", text: "Grid" },
  { href: "/typography", text: "Typography" },
  { href: "/colours", text: "Colours" },
  { href: "/spacing", text: "Spacing" },
  { href: "/transitions", text: "Transitions" },
  { href: "/utilities", text: "Utilities" }
];

const MenuItem = ({ href, text }: MenuItemProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={`/docs${href}`}
        className={
          isActive(pathname, `/docs${href}`) ? "flex-center is-active" : ""
        }
      >
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Aside = () => (
  <aside className="aside">
    <nav aria-label="Side Navigation">
      <ul className="row flow-column-wrap align-start">
        {menuItems.map((item) => (
          <MenuItem key={item.href} href={item.href} text={item.text} />
        ))}
      </ul>
    </nav>
  </aside>
);

export default Aside;
