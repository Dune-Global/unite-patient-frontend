"use client";

import { getDoctorById } from "@/api/doctor-details/doctorDetailsAPI";
import DoctorCard from "@/components/doctor-details/DoctorCard";
import HistoryAccordion from "@/components/doctor-details/HistoryAccordion";
import Progress from "@/components/doctor-details/ProgressBar";
import { getDoctorHistory } from "@/data/mock/doctor-history";
import { IDoctorHistoryList } from "@/types/doctor-history";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();

  const [doctorHistory, setDoctorHistory] = useState<IDoctorHistoryList[]>([]);

  const [doctorDetails, setDoctorDetails] = useState<any>({});

  useEffect(() => {
    async function fetchDoctorHistory() {
      try {
        const historyData = await getDoctorHistory();
        setDoctorHistory(historyData);
      } catch (error) {
        console.error("Error fetching doctor history", error);
      }
    }
    fetchDoctorHistory();
  }, []);

  useEffect(() => {
    const getDoctorByIdActionHandler = async (doctorId: string) => {
      try {
        const res = await getDoctorById(doctorId);
        console.log("\n\n\nDoctor details", res.data);
        setDoctorDetails(res.data);
        console.log("\n\n\nDoctor details state", doctorDetails);
      } catch (error) {
        console.error("Error fetching doctor details", error);
      }
    };
    if (Array.isArray(params.id)) {
      getDoctorByIdActionHandler(params.id[0]);
    } else {
      getDoctorByIdActionHandler(params.id);
    }
  }, []);

  return (
    <div
      className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-20 mt-10
    "
    >
      <div className="md:col-span-1">
        <div>Params: {params.id}</div>
        <DoctorCard
          doctorId="1"
          image="https://randomuser.me/api/portraits/men/59.jpg"
          name="Dilantha Wijesinghe"
          specialty="Physician"
          email="wdilantha66@gmail.com"
          contactNumber="+94 72 1089721"
          gender="Male"
          slmc="SLMC 12345"
          currentHospital="General Hospital, Colombo"
          currentUniversity="-"
          personalClinic="No"
          clinicName="-"
          clinicAddress="-"
        />
      </div>

      <div className="md:col-span-2 space-y-28 md:px-6">
        <div className="mb-14 mt-6 max-w-[960px] w-full px-10 xl:px-10">
          <Progress currentStep={2} />
        </div>

        <div className="my-16 ">
          {doctorHistory.map((historyItem, index) => (
            <HistoryAccordion
              key={historyItem.id}
              {...historyItem}
              isLastItem={index === doctorHistory.length - 1} // Pass true for the last item
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
