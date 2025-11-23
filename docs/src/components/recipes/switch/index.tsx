import "./index.css";

export const Switch = () => (
  <label className="switch" htmlFor="switch">
    <input type="checkbox" id="switch" />
    <span className="slider" />
    <span className="label">Feature</span>
  </label>
);
