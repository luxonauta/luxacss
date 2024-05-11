import Link from "next/link";

export const metadata = {
  title: "🥲 Not found"
};

const NotFound = () => (
  <section className="row flow-column-wrap align-start">
    <div>
      <h1 className="title primary">404 - This page does not exist.</h1>
      <h2 className="title secondary">Please check the URL and try again.</h2>
    </div>
    <Link href="/" className="action primary">
      <span>Home</span>
    </Link>
  </section>
);

export default NotFound;
