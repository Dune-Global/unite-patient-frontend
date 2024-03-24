import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patient Settings",
  description: "Patient Settings Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
