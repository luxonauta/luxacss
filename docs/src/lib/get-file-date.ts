import fs from "node:fs/promises";
import type { DateFormats } from "@/types";

export const getFileDate = async (
  filePath: string,
  format: "short" | "numeric" | "2-digit" | "long" | "narrow" = "short"
): Promise<DateFormats> => {
  const dateCache = new Map<string, DateFormats>();
  const cached = dateCache.get(filePath);
  if (cached) return cached;

  const stats = await fs.stat(filePath);
  const date = stats.mtime;

  const month = date.toLocaleString("en-US", { month: format });
  const year = date.getFullYear().toString().slice(-2);
  const display = `${month}, ${year}`;
  const iso = date.toISOString();

  const dateFormats = { display, iso };
  dateCache.set(filePath, dateFormats);
  return dateFormats;
};
