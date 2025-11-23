import "@/styles/pages/docs.css";

import TableOfContents from "@/components/docs/table-of-contents";
import { CustomMDX } from "@/components/mdx-components/custom-mdx";
import PageTransition from "@/components/page-transition";
import { getMdxDataFromDirectory, getMdxFromFile } from "@/utils/mdx";
import { extractHeadings } from "@/utils/mdx/extract-headings";
import { validateMdxData } from "@/utils/mdx/validate-mdx-data";

export const generateStaticParams = async () => {
  const posts = getMdxDataFromDirectory("./recipes");
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mdxData = getMdxFromFile("./recipes", slug);
  const validatedData = validateMdxData(mdxData);

  return {
    title: validatedData.title,
    description: validatedData.description,
    alternates: {
      canonical: `/recipes/${slug}`
    },
    openGraph: {
      url: `https://www.luxacss.com/recipes/${slug}`
    }
  };
};

const DynamicPage = async ({
  params
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mdxData = getMdxFromFile("./recipes", slug);
  const validatedData = validateMdxData(mdxData);

  const toc = extractHeadings(validatedData.content);
  const content = validatedData.content;

  return (
    <PageTransition className="row flow-column-wrap align-start">
      <div>
        <h1 className="title primary">{validatedData.title}</h1>
        <p className="description">{validatedData.description}</p>
      </div>
      <TableOfContents headings={toc} />
      <CustomMDX source={content} />
    </PageTransition>
  );
};

export default DynamicPage;
