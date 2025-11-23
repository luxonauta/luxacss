import Link from "next/link";

import type { Recipe } from "@/types";

export const RecipeItem = ({
  link,
  title,
  description,
  lastModified
}: Recipe) => (
  <li className="item">
    <Link href={link} className="row">
      <div className="col">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <time dateTime={lastModified.iso}>{lastModified.display}</time>
    </Link>
  </li>
);
