import React from "react";
import { Prescription } from "@/types/doctor-patient-details";

type PrescriptionViewProps = {
  prescriptionDetails: Prescription;
};

type PrescriptionCardProps = {
  prescription: Prescription;
};

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
  prescription,
}) => {
  return (
    <div className="bg-white rounded-lg min-w-[75vw] md:min-w-[600px]  mt-24 lg:mt-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Session Date:</span>
          <span>
            {prescription.sessionDate
              ? new Date(prescription.sessionDate).toLocaleDateString("en-GB") +
                " - " +
                new Date(prescription.sessionDate).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              : "N/A"}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Symptoms:</span>
          <span>{prescription.symptoms}</span>
        </div>
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Diseases:</span>
          <span>{prescription.diseases}</span>
        </div>
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Stage:</span>
          <span>{prescription.stage}</span>
        </div>
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Weight:</span>{" "}
          <span>{prescription.weight} kg</span>
        </div>
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Height:</span>{" "}
          <span>{prescription.height} cm</span>
        </div>
        <div className="flex items-center justify-between text-sm lg:text-lg">
          <span className="font-bold w-32">Next Channel Date:</span>{" "}
          <span>
            {prescription.nextChanelDate
              ? new Date(prescription.nextChanelDate).toLocaleDateString(
                  "en-GB"
                ) +
                " - " +
                new Date(prescription.nextChanelDate).toLocaleTimeString(
                  "en-US",
                  { hour: "2-digit", minute: "2-digit", hour12: true }
                )
              : "N/A"}
          </span>
        </div>
        <div className="flex items-center justify-between  text-sm lg:text-lg">
          <span className="font-bold w-32">Other:</span>{" "}
          <span>{prescription.other}</span>
        </div>
        <hr className="my-4 text-ugray-200" />
        <div className="flex flex-col gap-5 justify-between text-sm lg:text-lg">
          <span className="font-bold">Session Description:</span>
          <span>{prescription.sessionDescription}</span>
        </div>
        <hr className="my-4 text-ugray-200" />

        {/* Medicine section */}
        <div className="font-semibold mb-2 text-sm lg:text-lg">Medicine:</div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 pl-4 w-[70%] text-sm lg:text-lg">
            {prescription.medicine.map((med) => (
              <div
                key={med._id}
                className="border border-ugray-200 rounded-lg flex flex-col gap-3 p-6 mb-4"
              >
                <div className="flex justify-between">
                  <span className="font-bold">Name:</span>
                  <span>{med.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Dose:</span>
                  <span>{med.dose}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Time:</span>
                  <span>{med.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4 text-ugray-200" />

        {/* Reports section */}
        <div className="font-semibold mb-2 text-sm lg:text-lg">Reports:</div>
        <div className="flex flex-col gap-2 pl-4 text-sm lg:text-lg">
          {prescription.reports.map((report) => (
            <div
              key={report._id}
              className="border border-ugray-200 rounded-lg flex flex-col gap-3 p-6 mb-4"
            >
              <div className="flex justify-between">
                <span className="font-bold">Name:</span>
                <span>{report.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Date to Take:</span>
                <span>{report.dateToTake}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// const mockPrescription: Prescription = {
//   _id: "1",
//   sessionDate: "2024-03-26",
//   symptoms: "Fever, Headache",
//   diseases: "Common Cold",
//   sessionDescription: "This is a test description. This is a text description.",
//   stage: "Recovery Stage",
//   weight: 70,
//   height: 175,
//   nextChanelDate: "2024-04-02",
//   other: "N/A",
//   medicine: [
//     {
//       _id: "1",
//       name: "Paracetamol",
//       dose: "500mg",
//       time: "Morning, Noon, Night",
//     },
//     {
//       _id: "2",
//       name: "Ibuprofen",
//       dose: "400mg",
//       time: "Morning",
//     },
//   ],
//   reports: [
//     {
//       _id: "1",
//       name: "Blood Test",
//       dateToTake: "2024-03-28",
//     },
//   ],
// };

const PrescriptionView: React.FC<PrescriptionViewProps> = ({
  prescriptionDetails,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PrescriptionCard prescription={prescriptionDetails} />
    </div>
  );
};

export default PrescriptionView;
