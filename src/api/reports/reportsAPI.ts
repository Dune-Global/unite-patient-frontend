import {
  BACKEND_BASE_URL,
  GET_ALL_REPORTS_URL,
  GET_DOCTOR_LIST_AND_ACCESS_INFO_URL,
  UPDATE_REPORT_ACCESS_URL,
  UPLOAD_REPORT_URL,
  UPLOAD_FILE_URL,
} from "@/api/_url/reports/url";
import CustomAxios from "@/utils/axiosInstance";
import axios from "axios";
import exp from "constants";

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
  patientSessionId: string,
  doctorId: string,
  allowed: boolean
) => {
  console.log("**************Update report access request API***************");
  return await CustomAxios({
    method: "PUT",
    baseURL: BACKEND_BASE_URL,
    url: UPDATE_REPORT_ACCESS_URL.replace(
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


export const uploadReport = async (
  reportName: string,
  date: string,
  picture: File
) => {
  // Create form data
  const formData = new FormData();
  formData.append("file", picture);

  // Upload the file
  return axios
    .post(`${BACKEND_BASE_URL}/${UPLOAD_FILE_URL}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((uploadResponse: any) => {
      // Check if the upload was successful
      if (uploadResponse.status === 201) {
        // Get the URL from the response
        const url = uploadResponse.data.imgUrl;

        // Submit the form data
        return CustomAxios({
          method: "POST",
          baseURL: BACKEND_BASE_URL,
          url: UPLOAD_REPORT_URL,
          data: {
            reportType: reportName,
            tookDate: date,
            reportUrl: url,
          },
        });
      } else {
        console.error("Upload failed");
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
