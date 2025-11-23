export const slugify = (string: string, fallback?: string) => {
  return (
    string
      .toString()
      .toLowerCase()
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\s+/g, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+|-+$/g, "")
      .trim() ||
    fallback ||
    ""
  );
};
