import "@/styles/pages/docs.scss";
import Ad from "@/components/ad";
import Aside from "@/components/docs/aside";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="row flow-column-wrap align-start">
    <Aside />
    <Ad />
    {children}
  </div>
);

export default RootLayout;
