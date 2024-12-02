import "@/styles/pages/recipes.scss";
import Link from "next/link";
import PageTransition from "@/components/page-transition";
import Badge from "@/components/recipes/badge";
import { Switch } from "@/components/recipes/switch";

export const metadata = {
  title: "Recipes",
  description:
    "Component recipes for you to modify, copy and paste into your projects!",
  alternates: {
    canonical: "/recipes"
  }
};

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card = ({ title, description, children }: CardProps) => (
  <Link href={`/recipes/${title.toLowerCase()}`} className="card">
    <div className="component">{children}</div>
    <div className="info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Link>
);

const Recipes = () => (
  <PageTransition className="row flow-column-wrap align-start">
    <h1 className="title primary">Recipes</h1>
    <div className="text">
      <p>
        Component and elements recipes to modify, copy and paste into your
        projects!
      </p>
    </div>
    <section className="components row">
      <Card title="Badge" description="The tiny count and labelling component.">
        <Badge />
      </Card>
      <Card title="Switch" description="The common toggle for binary choices.">
        <Switch />
      </Card>
    </section>
  </PageTransition>
);

export default Recipes;
