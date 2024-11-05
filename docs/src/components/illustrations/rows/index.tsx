import "./index.scss";

export const Rows = () => (
  <div className="illustration rows">
    <div className="container-75">
      <code>container-75</code>
      <div className="flex flow-column-wrap wrapper">
        <code>row</code>
        <div className="row">
          <div className="col">
            <code>col</code>
            <span>Column</span>
          </div>
          <div className="col">
            <code>col</code>
            <span>Column</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
