import "@/styles/pages/home.scss";
import Link from "next/link";
import Features from "@/components/home/features";

const Home = () => (
  <section className="row flow-column-wrap align-start">
    <div>
      <i className="icon fa-duotone fa-shapes" />
      <h1 className="title primary">Luxa CSS</h1>
      <h2 className="title">Quickly design, build and ship!</h2>
    </div>
    <div className="text">
      <p>
        Luxa is a starting point for a clean, lightweight design system that
        aims for minimalism, speed, and ease of maintenance.
      </p>
      <p>
        Using it avoids intricate and difficult-to-tweak CSS structures,
        resulting in a more streamlined development process and better project
        performance.
      </p>
    </div>
    <div className="row justify-start flow-row-nowrap actions-group">
      <Link href="/docs" className="action primary">
        <span>Get started</span>
      </Link>
      <Link
        href="https://github.com/luxonauta/luxacss"
        target="_blank"
        rel="noopener noreferrer"
        className="action"
      >
        <span>GitHub</span>
      </Link>
    </div>
    <hr />
    <Features />
  </section>
);

export default Home;
