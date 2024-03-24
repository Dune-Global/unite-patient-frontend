export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const GET_CONNECTED_DOCTORS_URL =
  "/patient-doc/give-permission/:patientSessionId";

export const UPDATE_HISTORY_ACCESS_URL =
  "/patient-doc/update-permission/:patientSessionId";
