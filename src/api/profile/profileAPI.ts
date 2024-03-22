import axios from "axios";
import {
  BACKEND_BASE_URL,
  UPDATE_PATIENT_URL,
  UPDATE_PASSWORD_URL,
  VERIFY_EMAIL_URL,
  UPLOAD_FILES_URL,
  DELETE_FILE_URL,
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
    const response = await CustomAxios({
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
  oldPassword: string;
  newPassword: string;
}) => {
  try {
    const response = await CustomAxios({
      method: "PATCH",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_PASSWORD_URL,
      data: {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
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

export const uploadFiles  = async () => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: UPLOAD_FILES_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteFiles  = async (values: {
  imageUrl: string;
}) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: DELETE_FILE_URL,
     data: values,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};