import { IMedicalInformation } from "@/types/medical-information";

export const getAllMedicalInformation = async (): Promise<
  IMedicalInformation[]
> => {
  return [
    {
      doctorId: "1",
      firstName: "Dr. John",
      lastName: "Doe",
      allowed: true,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=John+Doe",
    },
    {
      doctorId: "2",
      firstName: "Dr. Jane",
      lastName: "Doe",
      allowed: false,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=Jane+Doe",
    },
    {
      doctorId: "3",
      firstName: "Dr. John",
      lastName: "Smith",
      allowed: true,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=John+Smith",
    },
    {
      doctorId: "4",
      firstName: "Dr. Jane",
      lastName: "Smith",
      allowed: false,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=Jane+Smith",
    },
    {
      doctorId: "5",
      firstName: "Dr. John",
      lastName: "Doe",
      allowed: true,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=John+Doe",
    },
    {
      doctorId: "6",
      firstName: "Dr. Jane",
      lastName: "Doe",
      allowed: false,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=Jane+Doe",
    },
    {
      doctorId: "7",
      firstName: "Dr. John",
      lastName: "Smith",
      allowed: true,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=John+Smith",
    },
    {
      doctorId: "8",
      firstName: "Dr. Jane",
      lastName: "Smith",
      allowed: true,
      designation: "Cardiologist",
      imgUrl: "https://ui-avatars.com/api/?name=Jane+Smith",
    },
  ];
};
