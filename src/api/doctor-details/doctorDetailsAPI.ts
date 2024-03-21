import axios from "axios";

import { BACKEND_BASE_URL } from "@/api/_url/doctor-details/url";
import { GET_DOCTOR_BY_ID_URL } from "../_url/doctor-details/url";

/**
 * Get Doctor By Id
 */

export const getDoctorById = async (doctorId: string) => {
  console.log("**************Get Doctor by Id request API***************");
  return await axios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_DOCTOR_BY_ID_URL.replace(":doctorId", doctorId),
  });
};
