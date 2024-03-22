import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patient Overview",
  description: "Patient Overview Page",
};

export default function Layout({
  children,
  appoinmentsApprove,
  appoinmentsList,
  summary,
  welcome,
}: {
  children: React.ReactNode;
  appoinmentsApprove: React.ReactNode;
  appoinmentsList: React.ReactNode;
  summary: React.ReactNode;
  welcome: React.ReactNode;
}) {
  return (
    <>
      {children}
      {welcome}
      {summary}
    </>
  );
}
