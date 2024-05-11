export const metadata = {
  title: "About",
  description:
    "Discover Luxa CSS's journey to simplicity - minimalist and ideal for modern web development.",
  alternates: {
    canonical: `/about`
  }
};

const About = () => (
  <section className="row flow-column-wrap align-start">
    <h1 className="title primary">About</h1>
    <article className="text">
      <p>
        Many developers find CSS frustrating, yet <b>mastering</b> it can turn
        this challenge into a wellspring of <b>creativity</b> and{" "}
        <b>satisfaction</b>.
      </p>
      <p>
        Popular frameworks often <b>promise</b> ease but typically complicate
        alignment with our actual needs. My journey led to these insights:
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
        These inspired me to develop Luxa CSS, a minimal tool that prioritizes
        flexibility and simplicity. It uses a standard grid system and only the
        essentials.
      </p>
      <p>
        Choosing Luxa and custom CSS not only trims file size but also
        significantly reduces the time and frustration usually spent wrestling
        with other frameworks.
      </p>
    </article>
  </section>
);

export default About;
