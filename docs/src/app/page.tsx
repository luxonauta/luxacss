import "@/styles/pages/home.css";
import Link from "next/link";
import Features from "@/components/home/features";
import { SeedlingIcon } from "@/components/icons";
import PageTransition from "@/components/page-transition";

const Home = () => (
  <PageTransition className="row flow-column-wrap align-start">
    <div>
      <div className="icon">
        <SeedlingIcon />
      </div>
      <h1 className="title primary">Luxa CSS</h1>
      <h2 className="title">The minimalist CSS library.</h2>
    </div>
    <div className="text">
      <p>
        A clean and lightweight kit that prioritizes minimalism, speed, and ease
        of maintenance.
      </p>
      <p>
        Explore our <Link href="/recipes">component recipes</Link> for
        ready-to-use components, or dive into the{" "}
        <Link href="/docs/overview">documentation</Link> to learn more.
      </p>
    </div>
    <div className="row justify-start flow-row-nowrap actions-group">
      <Link href="/docs/overview" className="action primary">
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
  </PageTransition>
);

export default Home;
