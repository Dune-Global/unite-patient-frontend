import { BACKEND_BASE_URL, GET_ALL_REPORTS_URL } from "@/api/_url/reports/url";
import CustomAxios from "@/utils/axiosInstance";

/**
 * Get all reports of a patient
 */

export const getAllReports = async () => {
  console.log("**************Get all reports request API***************");
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_ALL_REPORTS_URL,
  });
};
