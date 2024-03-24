"use client";

import { getAllReports } from "@/api/reports/reportsAPI";
import { reportColumns } from "@/components/doctor-details/reports-table/columns";
import { MedicalReportsDataTable } from "@/components/doctor-details/reports-table/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllMedicalReports } from "@/data/mock/medical-reports";
import { IMedicalReports } from "@/types/medical-reports";
import React, { useEffect, useState } from "react";

const ReportsPage = () => {
  const [reportsData, setReportsData] = useState<IMedicalReports[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllMedicalReportsActionHandler = async () => {
      try {
        const res = await getAllReports();
        if (res?.data?.reports) {
          setReportsData(res.data.reports);
        } else {
          console.error("Unexpected response from getAllReports:", res);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error calling getAllReports:", error);
        setIsLoading(false);
      }
    };
    getAllMedicalReportsActionHandler();
  }, []);

  if (isLoading) {
    return (
      <div className="flex gap-5 flex-col mt-16">
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
        <Skeleton className="h-[6vh]" />
      </div>
    );
  }

  return (
    <div className="">
      <MedicalReportsDataTable columns={reportColumns} data={reportsData} />
    </div>
  );
};

export default ReportsPage;

