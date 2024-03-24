import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patient Sign up",
  description: "Doctor SignUp Page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
