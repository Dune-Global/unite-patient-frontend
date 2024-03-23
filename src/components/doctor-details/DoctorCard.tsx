"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../common/Button";
import { IDoctorCard } from "@/types/doctor-card";
import { UniteModal } from "../common/UniteModal";
import { MedicalInformationDataTable } from "./medical-history-table/data-table";
import { IMedicalInformation } from "@/types/medical-information";
import { getAllMedicalInformation } from "@/data/mock/medical-information";
import { connectedDoctorsColumns } from "./medical-history-table/columns";
import { MedicalReportsDataTable } from "./reports-table/data-table";
import { IMedicalReports } from "@/types/medical-reports";
import { getAllMedicalReports } from "@/data/mock/medical-reports";
import { reportColumns } from "./reports-table/columns";

const DoctorCard: React.FC<IDoctorCard> = ({
  image,
  name,
  designation,
  email,
  mobile,
  gender,
  slmcNumber,
  currentHospital,
  currentUniversity,
  isClinic,
  clinicName,
  clinicAddress,
}) => {
  const [infoData, setInfoData] = useState<IMedicalInformation[]>([]);

  const [reportsData, setReportsData] = useState<IMedicalReports[]>([]);

  useEffect(() => {
    const getAllMedicalInformationActionHandler = async () => {
      const data = await getAllMedicalInformation();
      setInfoData(data);
    };
    getAllMedicalInformationActionHandler();
  }, []);

  useEffect(() => {
    const getAllMedicalReportsActionHandler = async () => {
      const data = await getAllMedicalReports();
      setReportsData(data);
    };
    getAllMedicalReportsActionHandler();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-ugray-0 py-4 shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 mb-2">
        <div className="flex flex-col gap-6 items-center">
          <img className="w-20 h-20 rounded-full" src={image} alt="Profile" />
          <div className="flex flex-col items-center ">
            <div className="font-medium text-xl mb-2">{name}</div>
            <div className="text-sm text-ugray-400 font-medium">
              {designation}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <UniteModal
              title="Show Medical Information"
              content={
                <MedicalInformationDataTable
                  columns={connectedDoctorsColumns}
                  data={infoData}
                />
              }
              footer={
                <Button variant="default" size="lg">
                  Save Changes
                </Button>
              }
            >
              <Button variant="default" size="sm">
                Show Medical History
              </Button>
            </UniteModal>
            <UniteModal
              title="Show Medical Reports"
              content={
                <MedicalReportsDataTable
                  columns={reportColumns}
                  data={reportsData}
                />
              }
              footer={
                <Button variant="default" size="lg">
                  Save Changes
                </Button>
              }
            >
              <Button variant="outline" size="sm" className="px-8">
                Show Reports
              </Button>
            </UniteModal>
          </div>
        </div>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="px-6 py-4">
        <div className="flex justify-between gap-6 mb-4">
          <div className="w-1/2 pr-2">
            <p className="text-sm flex flex-col gap-2">
              <span className="text-ugray-200">Email</span>
              <span>{email}</span>
            </p>
          </div>

          <div className="w-1/2 pl-2 text-right">
            <p className="text-sm flex flex-col gap-2">
              <span className="text-ugray-200">Contact Number</span>
              <span>{mobile}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="px-6 py-4 w-full flex flex-col gap-6 justify-between">
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Gender:</span>
          <span>{gender}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">SLMC No:</span>
          <span>{slmcNumber}</span>
        </p>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="px-6 py-4 w-full flex flex-col gap-6 justify-between">
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Current Hospital:</span>
          <span>{currentHospital}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Current University:</span>
          <span>{currentUniversity}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Personal Clinic:</span>
          <span>{isClinic}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Clinic Name:</span>
          <span>{clinicName}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Clinic Address:</span>
          <span>{clinicAddress}</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
