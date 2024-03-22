import axios from "axios";
import {
  BACKEND_BASE_URL,
  UPDATE_PATIENT_URL,
  UPDATE_PASSWORD_URL,
  VERIFY_EMAIL_URL,
  LIST_APPOINTMENTS_URL,
  GET_APPOINTMENT_URL,
  DELETE_APPOINTMENT_URL
} from "@/api/_url/profile/url";
import { handleLoginResponse } from "@/helpers/auth/authHelper";
import CustomAxios from "@/utils/axiosInstance";

export const updatePatient = async (values: {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  imgUrl: string;
  mobile: string;
  weight: number;
  height: number;
  bloodGroup: string;
  allergies: string;
  hereditaryDiseases: string;
}) => {
  try {
    const response = await axios({
      method: "PUT",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_PATIENT_URL,
      data: values,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updatePassword = async (values: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios({
      method: "PATCH",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_PASSWORD_URL,
      data: {
        email: values.email,
        password: values.password,
      },
    });
    handleLoginResponse(response);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const verifyEmail  = async () => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: VERIFY_EMAIL_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const listAppointments  = async (values: {
    appointmentNumber: number;
  }) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: LIST_APPOINTMENTS_URL,
     data: {
        appointmentNumber: values.appointmentNumber,
     } ,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getAppointments  = async (values: {
    appointmentNumber: number;
  }) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GET_APPOINTMENT_URL,
     data: {
        appointmentNumber: values.appointmentNumber,
     } ,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteAppointment  = async (values: {
    appointmentNumber: number;
  }) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: DELETE_APPOINTMENT_URL,
     data: {
        appointmentNumber: values.appointmentNumber,
     } ,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const uploadFiles  = async (values: {}) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GET_APPOINTMENT_URL,
     data: values,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};