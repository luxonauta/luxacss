import Link from "next/link";

const Help = () => (
  <section className="row flow-column-wrap align-start">
    <h4>Getting Help</h4>
    <p>
      Need help? Open{" "}
      <Link
        href="https://github.com/luxonauta/luxacss/issues/new?ref=luxacss.com"
        target="_blank"
      >
        an issue.
      </Link>{" "}
      I&apos;ll be happy to help. 🎈
    </p>
  </section>
);

export default Help;
