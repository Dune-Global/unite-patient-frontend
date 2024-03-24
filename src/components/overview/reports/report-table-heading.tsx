export default function ReportsTableHeading() {
  const style = {
    tableHeading: "w-4/5 text-ugray-900/70 font-medium",
  };
  return (
    <div className="bg-ugray-100/80 mt-6 rounded-lg p-4 flex flex-row justify-between">
      <div className={`${style.tableHeading}`}>
        <h1>Report Name</h1>
      </div>
      <div className={`${style.tableHeading} !w-1/5`}>
        <h1>Date</h1>
      </div>
    </div>
  );
}
