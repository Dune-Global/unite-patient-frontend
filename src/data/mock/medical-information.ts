import { IMedicalInformation } from "@/types/medical-information";

export const getAllMedicalInformation = async (): Promise<
  IMedicalInformation[]
> => {
  return [
    {
      id: "1",
      doctorName: "Dr. John Doe",
      specialty: "Cardiologist",
    },
    {
      id: "2",
      doctorName: "Dr. Jane Doe",
      specialty: "Neurologist",
    },
    {
      id: "3",
      doctorName: "Dr. Michael Doe",
      specialty: "Dermatologist",
    },
    {
      id: "4",
      doctorName: "Dr. Mary Doe",
      specialty: "Psychiatrist",
    },
    {
      id: "5",
      doctorName: "Dr. Sarah Doe",
      specialty: "Oncologist",
    },
    {
      id: "6",
      doctorName: "Dr. James Doe",
      specialty: "Gynecologist",
    },
  ];
};
