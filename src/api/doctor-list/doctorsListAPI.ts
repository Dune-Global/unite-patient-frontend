import CustomAxios from "@/utils/axiosInstance";
import { BACKEND_BASE_URL, GET_ALL_DOCTORS } from "../_url/doctor-list/url";

export const getAllDoctors = async () => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GET_ALL_DOCTORS,
    });
    console.log("Response from getAllDoctors API: ", response);

    return response;
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};
