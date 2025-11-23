import Link from "next/link";
import type { ReactNode } from "react";

import PageTransition from "@/components/page-transition";

export const metadata = {
  title: "About",
  description:
    "Learn why Luxa CSS exists, the problems it solves, and how it prioritizes minimalism, speed, and maintainability over complexity.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    url: "https://www.luxacss.com/about"
  }
};

const ExternalLink = ({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link href={`${href}?ref=luxacss.com`} target="_blank">
    {children}
  </Link>
);

const Section = ({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="text">
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

const ListItem = ({
  url,
  name,
  desc
}: {
  url: string;
  name: string;
  desc: string;
}) => (
  <li>
    <ExternalLink href={url}>{name}:</ExternalLink>
    <span> {desc};</span>
  </li>
);

const technologies = [
  { name: "PostCSS", desc: "CSS processing tool", url: "https://postcss.org/" },
  { name: "jsDelivr", desc: "CDN", url: "https://www.jsdelivr.com/" },
  { name: "Next.js", desc: "React framework", url: "https://nextjs.org/" },
  { name: "MDX", desc: "Markdown with JSX", url: "https://mdxjs.com/" },
  {
    name: "Vercel",
    desc: "Hosting and website CDN",
    url: "https://vercel.com/"
  }
];

const About: React.FC = () => (
  <PageTransition className="row flow-column-wrap align-start">
    <h1 className="title primary">About</h1>
    <Section title="Why Luxa CSS?">
      <p>
        While many find CSS challenging, mastering it can unlock tremendous
        creativity and satisfaction. Luxa CSS was born from the realization that
        popular frameworks, despite their promises, often complicate rather than
        simplify.
      </p>
      <h3 className="title">Common framework pitfalls:</h3>
      <ul>
        <li>Complexity and inflexibility;</li>
        <li>Cluttered HTML due to excessive wrappers and classes;</li>
        <li>Performance issues from bulky CSS files.</li>
      </ul>
      <p>
        Luxa CSS addresses these issues by prioritizing minimalism, speed, and
        maintainability.
      </p>
    </Section>
    <Section title="Support this project">
      <p>
        <ExternalLink href="https://x.com/luxonauta">
          I&apos;m Lucas,
        </ExternalLink>{" "}
        creator of this project & maintainer of the{" "}
        <ExternalLink href="https://gumroad.com/a/320709843/tPfIDt">
          Dracula Theme/Pro
        </ExternalLink>
        . Luxa is my side project; if you find it valuable, consider:
      </p>
      <ul>
        <li>
          <ExternalLink href="https://ko-fi.com/luxonauta">
            Buy me a coffee at Ko-Fi;
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/sponsors/luxonauta">
            Sponsor me on GitHub.
          </ExternalLink>
        </li>
      </ul>
      <p>
        Your support will help me dedicate more time to improving Luxa CSS by
        adding features, fixing bugs, and developing support materials.
      </p>
    </Section>
    <Section title="Contributing">
      <p>
        Luxa CSS is an open-source project. You can contribute by{" "}
        <ExternalLink href="https://github.com/luxonauta/luxacss/issues/new">
          reporting issues
        </ExternalLink>
        ,{" "}
        <ExternalLink href="https://github.com/luxonauta/luxacss/discussions/new?category=ideas">
          suggesting improvements
        </ExternalLink>
        , or{" "}
        <ExternalLink href="https://github.com/luxonauta/luxacss/compare">
          submitting pull requests
        </ExternalLink>
        .
      </p>
    </Section>
    <Section title="Built with">
      <p>Core technologies powering Luxa CSS and its documentation:</p>
      <ul>
        {technologies.map((tech) => (
          <ListItem key={tech.name} {...tech} />
        ))}
      </ul>
    </Section>
  </PageTransition>
);

export default About;
