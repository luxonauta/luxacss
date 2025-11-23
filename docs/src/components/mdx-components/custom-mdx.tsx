import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkGfm from "remark-gfm";

import mdxComponents from "./index";

interface CustomMDXProps {
  source: string;
}

export const CustomMDX = ({ source }: CustomMDXProps) => {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents as unknown as MDXComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeUnwrapImages]
        }
      }}
    />
  );
};
