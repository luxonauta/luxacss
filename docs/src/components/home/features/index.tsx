import "./index.css";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

const featureItems: FeatureItem[] = [
  {
    id: "minimal",
    title: "Minimal",
    description: "Crafted to be just the ideal start."
  },
  {
    id: "extend",
    title: "Effortlessly extend",
    description: "Customize, expand or modify with ease."
  },
  {
    id: "library",
    title: "Library",
    description: "Use with your preferred framework."
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
    {featureItems.map((item) => (
      <FeatureCard key={item.id} {...item} />
    ))}
  </section>
);

export default Features;
