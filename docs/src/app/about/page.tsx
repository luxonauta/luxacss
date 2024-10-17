import Link from "next/link";
import PageTransition from "@/components/page-transition";

export const metadata = {
  title: "About",
  description:
    "Discover Luxa CSS: A minimalist approach to modern web development.",
  alternates: {
    canonical: "/about"
  }
};

const About = () => (
  <PageTransition className="row flow-column-wrap align-start">
    <h1 className="title primary">About</h1>
    <article className="text">
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
        maintainability. It&apos;s a breath of fresh air. 🪔
      </p>
    </article>
    <article className="text">
      <h2 className="title">Built with</h2>
      <p>Core technologies powering Luxa CSS and its documentation:</p>
      <ul>
        {[
          {
            name: "Sass",
            desc: "CSS pre-processor",
            url: "https://sass-lang.com/"
          },
          { name: "jsDelivr", desc: "CDN", url: "https://www.jsdelivr.com/" },
          {
            name: "Next.js",
            desc: "React framework",
            url: "https://nextjs.org/"
          },
          { name: "MDX", desc: "Markdown with JSX", url: "https://mdxjs.com/" },
          {
            name: "Vercel",
            desc: "Hosting and website CDN",
            url: "https://vercel.com/"
          }
        ].map(({ name, desc, url }) => (
          <li key={name}>
            <Link href={`${url}?ref=luxacss.com`} target="_blank">
              {name}:
            </Link>
            <span> {desc};</span>
          </li>
        ))}
      </ul>
    </article>
  </PageTransition>
);

export default About;
