import axios from "axios";
import {
  BACKEND_BASE_URL,
  DOC_CONNECTION_URL,
} from "@/api/_url/doc-connect/url";

export const connectWithDoc = async (data: {
  token: string;
  docId: string;
}) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${DOC_CONNECTION_URL}${data.docId}`,
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
