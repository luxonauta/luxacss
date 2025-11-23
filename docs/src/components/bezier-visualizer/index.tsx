import "./index.css";

interface BezierVisualizerProps {
  name?: string;
  bezier?: string | number[];
}

const processInput = (input: string | number[]): number[] => {
  if (Array.isArray(input)) return input.map(Number);
  return input
    .toString()
    .trim()
    .split(",")
    .map((point) => Number.parseFloat(point));
};

const BezierVisualizer: React.FC<BezierVisualizerProps> = ({
  name = "ease",
  bezier = "0.4,0,0.2,1"
}) => {
  const points = processInput(bezier);
  const [x1, y1, x2, y2] = points;

  const cp1 = { x: x1 * 100, y: (1 - y1) * 100 };
  const cp2 = { x: x2 * 100, y: (1 - y2) * 100 };

  const info = `var(--${name}) - bezier curve visualization`;

  return (
    <div className="bezier-visualizer" title={info}>
      <svg viewBox="-24 -24 142 142" preserveAspectRatio="xMidYMid meet">
        <title>{info}</title>
        <g className="control-handles">
          <line x1="0" y1="100" x2={cp1.x} y2={cp1.y} />
          <line x1="100" y1="0" x2={cp2.x} y2={cp2.y} />
        </g>
        <g className="control-points">
          <circle cx={cp1.x} cy={cp1.y} r="3" />
          <circle cx={cp2.x} cy={cp2.y} r="3" />
        </g>
        <path
          className="bezier-curve"
          d={`M 0,100 C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} 100,0`}
        />
        <circle className="animated-dot" r="3">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path={`M 0,100 C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} 100,0`}
          />
        </circle>
      </svg>
    </div>
  );
};

export default BezierVisualizer;
