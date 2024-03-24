import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patient Message",
  description: "Patient Message Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
