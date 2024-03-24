import {
  BACKEND_BASE_URL,
  GET_ALL_REPORTS_URL,
  GET_DOCTOR_LIST_AND_ACCESS_INFO_URL,
  UPDATE_REPORT_ACCESS_URL,
} from "@/api/_url/reports/url";
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

/**
 * Get doctor list and access info for reports
 */

export const getDoctorListAndAccessInfo = async (reportId: string) => {
  console.log(
    "**************Get Doctor list and access info for reports request API***************"
  );
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_DOCTOR_LIST_AND_ACCESS_INFO_URL.replace(":reportId", reportId),
  });
};

/**
 * Update report access
 */

export const updateReportAccess = async (
  reportId: string,
  doctorId: string,
  allowed: boolean
) => {
  console.log("**************Update report access request API***************");
  return await CustomAxios({
    method: "PUT",
    baseURL: BACKEND_BASE_URL,
    url: UPDATE_REPORT_ACCESS_URL.replace(":reportId", reportId),
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
