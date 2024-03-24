export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const GET_DOCTOR_BY_ID_URL = "/doctor/find-one/:doctorId";

export const GET_DOCTOR_PATIENT_DETAILS_URL =
  "/patient-doc/doctor-patient-detail/:patientSessionId";

export const GET_DOCTOR_DETAILS_OF_PATIENTS = "/patient-doc/connected-doctors";
export const ALL_APPOINMENTS = "/appointment/patient-appointments";




