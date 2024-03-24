import CustomAxios from "@/utils/axiosInstance";
import {
  BACKEND_BASE_URL,
  GET_CONNECTED_DOCTORS_URL,
  UPDATE_HISTORY_ACCESS_URL,
} from "../_url/history/url";

/**
 *
 * Get all connected doctors
 */

export const getAllConnectedDoctors = async (patientSessionId: string) => {
  console.log(
    "**************Get all connected doctors request API***************"
  );
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_CONNECTED_DOCTORS_URL.replace(
      ":patientSessionId",
      patientSessionId
    ),
  });
};

/**
 * Update history access
 */

export const updateHistoryAccess = async (
  patientSessionId: string,
  doctorId: string,
  allowed: boolean
) => {
  console.log("**************Update history access request API***************");
  return await CustomAxios({
    method: "PUT",
    baseURL: BACKEND_BASE_URL,
    url: UPDATE_HISTORY_ACCESS_URL.replace(
      ":patientSessionId",
      patientSessionId
    ),
    data: {
      doctorsAllowed: [
        {
          doctorId: doctorId,
          allowed: allowed,
        },
      ],
    },
  });
};
