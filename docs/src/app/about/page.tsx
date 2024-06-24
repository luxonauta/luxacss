import Link from "next/link";
import PageTransition from "@/components/page-transition";

export const metadata = {
  title: "About",
  description:
    "Discover Luxa CSS's journey to simplicity - minimalist and ideal for modern web development.",
  alternates: {
    canonical: `/about`
  }
};

const About = () => (
  <PageTransition className="row flow-column-wrap align-start">
    <h1 className="title primary">About</h1>
    <article className="text">
      <p>
        Many developers find CSS frustrating, yet <b>mastering</b> it can turn
        this challenge into a wellspring of <b>creativity</b> and{" "}
        <b>satisfaction</b>.
      </p>
      <p>
        Popular frameworks/libs often <b>promise</b> ease but typically
        complicate alignment with our actual needs. My journey led to these
        insights:
      </p>
      <ul>
        <li>
          They are robust but tend to be <b>complex</b> and <b>inflexible</b>.
        </li>
        <li>
          Their overuse of wrappers and classes clutters HTML,{" "}
          <b>muddying its clarity</b>.
        </li>
        <li>
          <b>Bulky CSS files</b> bog down style processing, diminishing{" "}
          <b>performance</b>.
        </li>
      </ul>
      <p>
        These inspired me to develop Luxa CSS, a minimal and lightweight kit
        that prioritizes minimalism, speed, and ease of maintenance.
      </p>
      <p>
        Choosing Luxa and custom CSS not only trims file size but also
        significantly reduces the time and frustration usually spent wrestling
        with other solutions.
      </p>
      <p>A breath of fresh air. 🪔</p>
    </article>
    <article className="text">
      <h2 className="title">Built With</h2>
      <p>
        The core technologies and resources powering both Luxa CSS and its
        documentation website:
      </p>
      <ul>
        <li>
          <Link href="https://sass-lang.com/?ref=luxacss.com" target="_blank">
            Sass:
          </Link>
          <span> CSS pre-processor;</span>
        </li>
        <li>
          <Link
            href="https://www.jsdelivr.com/?ref=luxacss.com"
            target="_blank"
          >
            jsDelivr:
          </Link>
          <span> CDN;</span>
        </li>
        <li>
          <Link href="https://nextjs.org/?ref=luxacss.com" target="_blank">
            Next.js:
          </Link>
          <span> React framework;</span>
        </li>
        <li>
          <Link href="https://mdxjs.com/?ref=luxacss.com" target="_blank">
            MDX:
          </Link>
          <span> Markdown with JSX;</span>
        </li>
        <li>
          <Link href="https://vercel.com/?ref=luxacss.com" target="_blank">
            Vercel:
          </Link>
          <span> Hosting and website CDN.</span>
        </li>
      </ul>
    </article>
  </PageTransition>
);

export default About;
