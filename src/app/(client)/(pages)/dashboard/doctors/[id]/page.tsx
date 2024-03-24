"use client";

import {
  getDoctorById,
  getDoctorPatientDetails,
} from "@/api/doctor-details/doctorDetailsAPI";
import DoctorCard from "@/components/doctor-details/DoctorCard";
import HistoryAccordion from "@/components/doctor-details/HistoryAccordion";
import { IDoctorPatientDetails } from "@/types/doctor-patient-details";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface PatientHistoryProps {
  patientHistory: IDoctorPatientDetails[];
}

const Page: React.FC<PatientHistoryProps> = ({ patientHistory }) => {
  const params = useParams();

  const [doctorDetails, setDoctorDetails] = useState<any>({});

  const [doctorPatientDetails, setDoctorPatientDetails] =
    useState<IDoctorPatientDetails | null>(null);

  useEffect(() => {
    const getDoctorPatientDetailsBySessionIdActionHandler = (
      patientSessionId: string
    ) => {
      getDoctorPatientDetails(patientSessionId)
        .then((res) => {
          console.log("\n\n\nDoctor patient details res", res.data);
          setDoctorPatientDetails(res.data);
          console.log("\n\n\nDoctor patient details", doctorPatientDetails);
          if (res.data) {
            getDoctorDetailsActionHandler(res.data.doctor);
          }
        })
        .catch((error) => {
          console.error("Error fetching doctor patient details", error);
        });
    };

    const getDoctorDetailsActionHandler = (doctorId: string) => {
      getDoctorById(doctorId)
        .then((res) => {
          setDoctorDetails(res.data);
          console.log("\n\n\nDoctor details", doctorDetails);
        })
        .catch((error) => {
          console.error("Error fetching doctor details", error);
        });
    };

    if (Array.isArray(params.id)) {
      getDoctorPatientDetailsBySessionIdActionHandler(params.id[0]);
    } else {
      getDoctorPatientDetailsBySessionIdActionHandler(params.id);
    }
  }, []);

  return (
    <div
      className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-20 mt-10
    "
    >
      <div className="md:col-span-1">
        <DoctorCard
          _id={doctorDetails._id}
          image={doctorDetails.imgUrl}
          name={`
            ${doctorDetails.firstName}  ${doctorDetails.lastName}
          `}
          designation={doctorDetails.designation}
          email={doctorDetails.email}
          mobile={doctorDetails.mobile}
          gender={doctorDetails.gender}
          slmcNumber={doctorDetails.slmcNumber}
          currentHospital={doctorDetails.currentHospital}
          currentUniversity={doctorDetails.currentUniversity}
          isClinic={doctorDetails.clinic?.isClinic ? "Yes" : "No"}
          clinicName={
            doctorDetails.clinic?.isClinic
              ? doctorDetails.clinic.clinicName
              : "-"
          }
          clinicAddress={
            doctorDetails.clinic?.isClinic
              ? doctorDetails.clinic.clinicAddress
              : "-"
          }
        />
      </div>

      <div className="md:col-span-2  md:px-6">
        <div className="my-4 ">
          {doctorPatientDetails &&
            doctorPatientDetails.prescription.map((prescriptionItem, index) => (
              <HistoryAccordion
                key={prescriptionItem._id}
                details={prescriptionItem}
                isLastItem={
                  index === doctorPatientDetails.prescription.length - 1
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
