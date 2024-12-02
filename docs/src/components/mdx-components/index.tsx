import BezierVisualizer from "../bezier-visualizer";
import Illustrations from "../illustrations";
import Badge from "../recipes/badge";
import { Switch } from "../recipes/switch";
import Table from "../table";
import Blockquote from "./blockquote";
import CodeBlock from "./code-block";
import createHeading from "./heading";
import { Recipe } from "./recipe";

const mdxComponents = {
  Badge,
  BezierVisualizer,
  blockquote: Blockquote,
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Illustrations,
  pre: CodeBlock,
  Recipe,
  Switch,
  table: Table
};

export default mdxComponents;
