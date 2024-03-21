import axios from "axios";
import {
  BACKEND_BASE_URL,
  UPDATE_PATIENT_URL,
  UPDATE_PASSWORD_URL,
  VERIFY_EMAIL_URL
} from "@/api/_url/profile/url";
import { handleLoginResponse } from "@/helpers/auth/authHelper";

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

export const verifyEmail  = async (values: {
    email: string;
  }) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: VERIFY_EMAIL_URL,
     data: {
        email: values.email,
     } ,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
