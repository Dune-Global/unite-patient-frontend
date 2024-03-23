import { accessToken } from "@/api/auth/authAPI";
import {
  BACKEND_BASE_URL,
  GET_DOCTOR_BY_ID_URL,
  GET_DOCTOR_DETAILS_OF_PATIENTS,
  GET_DOCTOR_PATIENT_DETAILS_URL,
} from "@/api/_url/doctor-details/url";
import CustomAxios from "@/utils/axiosInstance";

/**
 * Get Doctor By Id
 */

export const getDoctorById = async (doctorId: string) => {
  console.log("**************Get Doctor by Id request API***************");
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_DOCTOR_BY_ID_URL.replace(":doctorId", doctorId),
  });
};

/**
 * Get Doctor Patient Details
 */

export const getDoctorPatientDetails = async (patientSessionId: string) => {
  console.log(
    "**************Get Doctor Patient Details request API***************"
  );
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_DOCTOR_PATIENT_DETAILS_URL.replace(
      ":patientSessionId",
      patientSessionId
    ),
  });
};

export const getDoctorDetailsOfPatients = async () => {
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  try {
    const responce = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GET_DOCTOR_DETAILS_OF_PATIENTS,
      headers: {
        Authorization: accessToken,
      },
    });
    return responce;
  } catch (error: any) {
    return error;
  }
};
