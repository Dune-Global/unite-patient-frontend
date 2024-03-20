import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patients",
  description: "Patient Doctors Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
