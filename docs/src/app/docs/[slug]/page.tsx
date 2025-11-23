import { notFound } from "next/navigation";

import TableOfContents from "@/components/docs/table-of-contents";
import { CustomMDX } from "@/components/mdx-components/custom-mdx";
import PageTransition from "@/components/page-transition";
import { getMdxDataFromDirectory, getMdxFromFile } from "@/utils/mdx";
import { extractHeadings } from "@/utils/mdx/extract-headings";

export const generateStaticParams = async () => {
  const posts = getMdxDataFromDirectory("./content");
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mdxData = getMdxFromFile("./content", slug);

  if (!mdxData) {
    notFound();
  }

  return {
    title: mdxData.title as string,
    description: mdxData.description as string,
    alternates: {
      canonical: `/docs/${slug}`
    },
    openGraph: {
      url: `https://www.luxacss.com/docs/${slug}`
    }
  };
};

const DynamicPage = async ({
  params
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mdxData = getMdxFromFile("./content", slug);

  if (!mdxData) {
    notFound();
  }

  const toc = extractHeadings(mdxData.content as string);
  const content = mdxData.content as string;

  return (
    <PageTransition className="row flow-column-wrap align-start">
      <div>
        <h1 className="title primary">{String(mdxData.title)}</h1>
        <p className="description">{String(mdxData.description)}</p>
      </div>
      <TableOfContents headings={toc} />
      <CustomMDX source={content} />
    </PageTransition>
  );
};

export default DynamicPage;
