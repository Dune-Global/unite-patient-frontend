"use client";

import { RootState } from "@/store";
import ReportCard from "./report-card";
import ReportsTableHeading from "./report-table-heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DoctorCardSkeleton } from "../doctors/doctor-card-skeleton";
import { getAllReports } from "@/api/reports/reportsAPI";
import { setReportList } from "@/store/reducers/report-reducer";

export default function ReportsSection() {
  const dispatch = useDispatch();
  const reportsList = useSelector(
    (state: RootState) => state.reportsState.reportList
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      getAllReports()
      .then((response:any) => {
        dispatch(setReportList(response.data.reports))
        setLoading(true);
      }
      )
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!loading) {
    return (
      <div className="bg-ugray-0 mt-6 rounded-lg p-4">
        <div className="flex flex-col gap-7">
          <DoctorCardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <ReportsTableHeading />

      {reportsList.length > 0 ? (
        reportsList.map((report: any) => (
          <ReportCard
            key={report._id}
            reportName={report.reportType}
            date={report.tookDate}
            reportUrl={report.reportUrl}
          />
        ))
      ) : (
        <div className="text-center text-ugray-400 my-10">
          No Reports available
        </div>
      )}
    </div>
  );
}
