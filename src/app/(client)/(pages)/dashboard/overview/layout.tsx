import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unite | Patient Overview",
  description: "Patient Overview Page",
};

export default function Layout({
  children,
  summary,
  welcome,
  doctors,
  bookAnAppoinment,
  latestAppoinments,
  reports,
}: {
  children: React.ReactNode;
  appoinmentsApprove: React.ReactNode;
  appoinmentsList: React.ReactNode;
  summary: React.ReactNode;
  welcome: React.ReactNode;
  doctors: React.ReactNode;
  bookAnAppoinment: React.ReactNode;
  latestAppoinments: React.ReactNode;
  reports: React.ReactNode;
}) {
  return (
    <>
      {children}
      {welcome}
      {summary}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {doctors}
        <div className="grid grid-rows-2">
          {bookAnAppoinment}
          {reports}
        </div>
        {latestAppoinments}
      </div>
    </>
  );
}
