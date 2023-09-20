import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Test Media",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is the about layout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
