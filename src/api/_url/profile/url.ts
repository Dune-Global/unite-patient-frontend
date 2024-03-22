export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const UPDATE_PATIENT_URL = "/patient/update";
export const UPDATE_PASSWORD_URL = "/patient/update-password";
export const VERIFY_EMAIL_URL = "/patient/verify-email";

export const LIST_APPOINTMENTS_URL = "/appointment/get-appointment-numbers/:scheduleId";
export const GET_APPOINTMENT_URL = "/appointment/get-appointment/:scheduleId";
export const DELETE_APPOINTMENT_URL = "/appointment/delete-availability/:appointmentId";

export const UPLOAD_FILES_URL = "/api/v1/file/upload";
export const DELETE_FILE_URL = "/file/delete";