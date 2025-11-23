import { notFound } from "next/navigation";

import type { FrontmatterWithDate } from "./index";

interface MdxData {
  title?: unknown;
  description?: unknown;
  content?: unknown;
}

export type ValidatedMdxData = FrontmatterWithDate & {
  title: string;
  description: string;
  content: string;
};

const isValidString = (value: unknown): value is string => {
  return typeof value === "string" && value.length > 0;
};

export function validateMdxData(
  mdxData: MdxData | null | undefined
): ValidatedMdxData {
  if (
    !mdxData ||
    !isValidString(mdxData.title) ||
    !isValidString(mdxData.description) ||
    !isValidString(mdxData.content)
  ) {
    notFound();
  }

  return mdxData as ValidatedMdxData;
}
