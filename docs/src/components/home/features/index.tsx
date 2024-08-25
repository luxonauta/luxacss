import "./index.scss";

interface FeatureItem {
  title: string;
  description: string;
}

const featureItems: FeatureItem[] = [
  {
    title: "Minimal",
    description: "Crafted to be just the ideal start."
  },
  {
    title: "Effortlessly extend",
    description: "Customize, expand or modify with ease."
  },
  {
    title: "Reproducible",
    description: "Reproduce in other frameworks."
  }
];

const FeatureCard: React.FC<FeatureItem> = ({ title, description }) => (
  <div className="card col">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features: React.FC = () => (
  <section className="features row">
    {featureItems.map((item, index) => (
      <FeatureCard key={index} {...item} />
    ))}
  </section>
);

export default Features;
