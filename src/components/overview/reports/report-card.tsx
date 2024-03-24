export default function ReportCard({
  reportName = "Report Name",
  date = "01/01/2021",
}: {
  reportName?: string;
  date?: string;
}) {
  const style = {
    tableHeading: "w-4/5 text-ugray-900/70 font-medium",
  };

  const formatedDate = date ? new Date(date).toLocaleDateString("en-US") : "";

  return (
    <div className="bg-ugray-0  rounded-lg p-4 flex flex-row justify-between">
      <div className={`${style.tableHeading}`}>
        <h1>{reportName}</h1>
      </div>
      <div className={`${style.tableHeading} !w-1/5`}>
        <h1>{formatedDate}</h1>
      </div>
    </div>
  );
}
