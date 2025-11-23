import "@/styles/pages/docs.css";
import Ad from "@/components/ad";
import Aside from "@/components/docs/aside";
import Help from "@/components/help";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="row flow-column-wrap align-start">
    <Aside />
    <Ad />
    {children}
    <Help />
  </div>
);

export default RootLayout;
