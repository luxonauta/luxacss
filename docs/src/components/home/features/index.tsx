import "./index.scss";

const items = [
  {
    title: "Minimal",
    description: "Expertly crafted to be just the ideal start."
  },
  {
    title: "Effortlessly extend",
    description: "Customize, expand or modify with simplicity."
  },
  {
    title: "Reproducible",
    description: "Reproduce in Tailwind CSS or other frameworks."
  }
];

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <div className="card col">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => (
  <section className="features row">
    {items.map((item, index) => (
      <Card key={index} title={item.title} description={item.description} />
    ))}
  </section>
);

export default Features;
