import { getCompiledServerMdx } from "@mintlify/mdx";
import { notFound } from "next/navigation";
import fs from "node:fs/promises";
import path from "node:path";
import TableOfContents from "@/components/docs/table-of-contents";
import mdxComponents from "@/components/mdx-components";
import PageTransition from "@/components/page-transition";
import { extractHeadings } from "@/lib/extract-headings";
import getFile from "@/lib/get-file";

const contentDirectory = path.join(process.cwd(), "./content");
const contentExtension = ".mdx";

export const generateStaticParams = async () => {
  return await fs.readdir(contentDirectory);
};

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const filePath = path.join(contentDirectory, params.slug + contentExtension);
  const source = await getFile(filePath);

  if (!source) notFound();

  const { frontmatter } = await getCompiledServerMdx({
    source: source
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: `/docs/${params.slug}`
    }
  };
};

const DynamicPage = async ({ params }: { params: { slug: string } }) => {
  const filePath = path.join(contentDirectory, params.slug + contentExtension);
  const source = await getFile(filePath);

  if (!source) notFound();

  const toc = extractHeadings(source);

  const { content, frontmatter } = await getCompiledServerMdx({
    source: source,
    components: mdxComponents
  });

  return (
    <PageTransition className="row flow-column-wrap align-start">
      <div>
        <h1 className="title primary">{String(frontmatter.title)}</h1>
        <p className="description">{String(frontmatter.description)}</p>
      </div>
      <TableOfContents headings={toc} />
      {content}
    </PageTransition>
  );
};

export default DynamicPage;
