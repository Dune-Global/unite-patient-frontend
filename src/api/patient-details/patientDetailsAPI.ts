import { BACKEND_BASE_URL } from "@/api/_url/doctor-details/url";
import { GET_DOCTOR_PATIENT_DETAILS_URL } from "../_url/patient-details/url";
import CustomAxios from "@/utils/axiosInstance";

/**
 * Get Doctor By Id
 */

export const getDoctorById = async (patientSessionId: string) => {
  console.log("**************Get Doctor Patient request API***************");
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_DOCTOR_PATIENT_DETAILS_URL.replace(
      ":patientSessionId",
      patientSessionId
    ),
  });
};
