import "@/styles/pages/docs.scss";
import Aside from "@/components/docs/aside";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <section className="row flow-column-wrap align-start">
    <Aside />
    <>{children}</>
  </section>
);

export default RootLayout;
