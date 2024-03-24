"use client";

import { RootState } from "@/store";
import ReportCard from "./report-card";
import ReportsTableHeading from "./report-table-heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DoctorCardSkeleton } from "../doctors/doctor-card-skeleton";

export default function ReportsSection() {
  const dispatch = useDispatch();
  const reportsList = useSelector(
    (state: RootState) => state.reportsState.reportList
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // TODO: Fetch reports from the API
      // TODO: Dispatch the fetched reports to the store
      // TODO: Set the loading state to false
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Mee thamaa atakatu tika hutto
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

      {/* Yasith this is the component that you need to map */}
      {reportsList.length > 0 ? (
        reportsList.map((report: any) => (
          <ReportCard
            key={report.id}
            reportName={report.reportName}
            // Date eka normal ena vidihatama pass karahn methanata
            date={report.date}
          />
        ))
      ) : (
        <div className="text-center text-ugray-400 my-10">No Reports available</div>
      )}
    </div>
  );
}
