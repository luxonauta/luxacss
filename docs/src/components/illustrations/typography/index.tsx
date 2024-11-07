import "./index.scss";

const textClasses = [
  { className: "text-01", code: "--text-01" },
  { className: "text-02", code: "--text-02" },
  { className: "text-03", code: "--text-03" },
  { className: "text-04", code: "--text-04" },
  { className: "text-05", code: "--text-05" },
  { className: "text-06", code: "--text-06" }
];

export const Typography = () => (
  <div className="illustration typography">
    <div className="row">
      {textClasses.map(({ className, code }) => (
        <div key={className} className={`info ${className}`}>
          <code>{code}</code>
          <span>In a hole in the ground there lived a hobbit.</span>
        </div>
      ))}
    </div>
  </div>
);
