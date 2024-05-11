"use client";

import "./index.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import isActive from "@/lib/active-pathname";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Docs", path: "/docs" },
  {
    path: "https://github.com/luxonauta/luxacss",
    label: "GitHub",
    isExternal: true
  }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav aria-label="Navigation Header">
        <ul>
          {pages.map((page, index) => (
            <li key={page.label + index}>
              {page.isExternal ? (
                <Link
                  href={page.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{page.label}</span>
                </Link>
              ) : (
                <Link
                  href={page.path}
                  className={isActive(pathname, page.path) ? "is-active" : ""}
                >
                  <span>{page.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
