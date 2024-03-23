"use client";

import { getAllReports } from "@/api/reports/reportsAPI";
import { reportColumns } from "@/components/doctor-details/reports-table/columns";
import { MedicalReportsDataTable } from "@/components/doctor-details/reports-table/data-table";
import { getAllMedicalReports } from "@/data/mock/medical-reports";
import { IMedicalReports } from "@/types/medical-reports";
import React, { useEffect, useState } from "react";

const ReportsPage = () => {
  const [reportsData, setReportsData] = useState<IMedicalReports[]>([]);

  useEffect(() => {
    const getAllMedicalReportsActionHandler = async () => {
      try {
        const res = await getAllReports();
        if (res?.data?.reports) {
          setReportsData(res.data.reports);
        } else {
          console.error("Unexpected response from getAllReports:", res);
        }
      } catch (error) {
        console.error("Error calling getAllReports:", error);
      }
    };
    getAllMedicalReportsActionHandler();
  }, []);

  return (
    <div className="">
      <MedicalReportsDataTable columns={reportColumns} data={reportsData} />
    </div>
  );
};

export default ReportsPage;
