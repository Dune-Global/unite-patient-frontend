"use client";

import React from "react";
import { Button } from "../common/Button";

interface Report {
  id: string;
  name: string;
  date: string;
}

interface ReportCardProps {
  reports: Report[];
}

const ReportCard: React.FC<ReportCardProps> = ({ reports }) => {
  return (
    <div className="max-w-[450px] mt-4">
        <div className="flex items-center justify-between">
            <div className="text-lg font-medium py-4">Reports</div>
            <div>
                <Button size="sm">Add New Report</Button>
            </div>
        </div>
      {/* static */}
      <div className="flex py-4 px-6 justify-between  items-center bg-ugray-100 font-medium text-ugray-400 rounded-lg">
        <span>Report Name</span>
        <span>Date</span>
      </div>

      {/* dynamic */}
      {reports.map((report) => (
        <div
          key={report.id}
          className="flex py-4 px-6 my-2 text-sm justify-between items-center bg-ugray-0 text-ugray-400 rounded-lg"
        >
          <span>{report.name}</span>
          <span>{report.date}</span>
        </div>
      ))}
    </div>
  );
};

export default ReportCard;
