import axios from "axios";

import {
  BACKEND_BASE_URL,
  GET_DOCTOR_LOCATION,
  GET_APPOINMENT_NUMBER,
  SCHEDULE_APPOINMENT,
} from "@/api/_url/appoinment/url";
import CustomAxios from "@/utils/axiosInstance";

export const getDoctorLocation = async (doctorId: string) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${GET_DOCTOR_LOCATION}${doctorId}`,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAppoinmentTime = async (scheduleId: string) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${GET_APPOINMENT_NUMBER}${scheduleId}`,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const scheduleAppoinment = async (
  scheduleId: string,
  appoinmentNo: string
) => {
  try {
    const newAppoinmentNo = parseInt(appoinmentNo);
    const response = await CustomAxios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: `${SCHEDULE_APPOINMENT}${scheduleId}`,
      data: {
        appointmentNumber: newAppoinmentNo,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
