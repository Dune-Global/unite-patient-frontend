import { IMedicalReports } from "@/types/medical-reports";

export const getAllMedicalReports = async (): Promise<IMedicalReports[]> => {
  return [
    {
      id: "1",
      reportName: "Cardiology Report",
      date: "2021-01-01",
    },
    {
      id: "2",
      reportName: "Neurology Report",
      date: "2021-02-01",
    },
    {
      id: "3",
      reportName: "Dermatology Report",
      date: "2021-03-01",
    },
    {
      id: "4",
      reportName: "Psychiatry Report",
      date: "2021-04-01",
    },
    {
      id: "5",
      reportName: "Oncology Report",
      date: "2021-05-01",
    },
    {
      id: "6",
      reportName: "Gynecology Report",
      date: "2021-06-01",
    },
  ];
};
