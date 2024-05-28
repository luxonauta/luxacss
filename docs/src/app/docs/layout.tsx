import "@/styles/pages/docs.scss";
import Aside from "@/components/docs/aside";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="row flow-column-wrap align-start">
    <Aside />
    <>{children}</>
  </div>
);

export default RootLayout;
