import "@/styles/pages/home.scss";
import { faSeedling } from "@awesome.me/kit-6533c71a8a/icons/duotone/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Features from "@/components/home/features";
import PageTransition from "@/components/page-transition";

const Home = () => (
  <PageTransition className="row flow-column-wrap align-start">
    <div>
      <div className="icon">
        <FontAwesomeIcon icon={faSeedling} />
      </div>
      <h1 className="title primary">Luxa CSS</h1>
      <h2 className="title">The minimalist CSS library.</h2>
    </div>
    <div className="text">
      <p>
        A clean and lightweight kit that prioritizes minimalism, speed, and ease
        of maintenance.
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
  </PageTransition>
);

export default Home;
