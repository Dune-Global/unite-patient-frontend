import { DoctorList } from "@/types/doctors";

interface ApiResponse {
  sessionId: string;
  doctor: {
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    email: string;
    doctorLastAccessedDate: string;
    imgUrl: string;
  };
}

export function convertDoctorsList(response: ApiResponse[]): DoctorList[] {
  return response.map((item) => ({
    sessionId: item.sessionId,
    doctorName: `${item.doctor.firstName} ${item.doctor.lastName}`,
    imgUrl: item.doctor.imgUrl,
    speciality: item.doctor.designation,
    gender: item.doctor.gender,
    email: item.doctor.email,
    doctorLastAccessedDate: item.doctor.doctorLastAccessedDate
      ? item.doctor.doctorLastAccessedDate
      : "N/A",
  }));
}
