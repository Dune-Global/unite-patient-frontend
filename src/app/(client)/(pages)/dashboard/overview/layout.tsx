import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Overview",
  description: "Doctor Overview Page",
};

export default function Layout({
  children,
  appoinmentsApprove,
  appoinmentsList,
  gender,
  age,
  summery,
  welcome,
}: {
  children: React.ReactNode;
  appoinmentsApprove: React.ReactNode;
  appoinmentsList: React.ReactNode;
  gender: React.ReactNode;
  age: React.ReactNode;
  summery: React.ReactNode;
  welcome: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
