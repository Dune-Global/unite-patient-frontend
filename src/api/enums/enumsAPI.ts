import axios from "axios";
import {
  BACKEND_BASE_URL,
  GENDER_LIST_URL,
} from "@/api/_url/enums/url";


export const getGenderList = async () => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GENDER_LIST_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

