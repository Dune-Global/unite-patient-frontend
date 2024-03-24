export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const GET_ALL_REPORTS_URL = "/report/get-reports-patient";

export const GET_DOCTOR_LIST_AND_ACCESS_INFO_URL =
  "/report/get-doctors-with-access/:reportId";

export const UPDATE_REPORT_ACCESS_URL =
  "/report/update-doctors-access/:reportId";