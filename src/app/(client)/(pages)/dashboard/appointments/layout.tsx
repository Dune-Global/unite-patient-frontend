import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patient Appoinments",
  description: "Patient Appoinments Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
