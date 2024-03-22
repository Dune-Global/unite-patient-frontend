import axios from "axios";
import { BACKEND_BASE_URL, REFRESH_URL } from "@/api/_url/auth/url";
const CustomAxios = axios.create({});
CustomAxios.interceptors.request.use(
  (req) => {
    req.headers["AUTHORIZATION"] = sessionStorage.getItem("ACCESSTOKEN");
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
CustomAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const originalReq = err.config;
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      return axios({
        method: "GET",
        baseURL: BACKEND_BASE_URL,
        url: REFRESH_URL,
        headers: {
          Authorization: localStorage.getItem("REFRESHTOKEN"),
        },
      })
        .then((response) => {
          localStorage.setItem(
            "REFRESHTOKEN",
            `Bearer ${response.data?.refreshToken}`
          );
          sessionStorage.setItem(
            "ACCESSTOKEN",
            `Bearer ${response.data?.accessToken}`
          );
          console.log(
            response,
            "*************Get Access Token response*******************"
          );
          return CustomAxios(originalReq);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (status === 403) {
      sessionStorage.clear();
      localStorage.clear();
      window.location.replace("/sign-in");
    }
    return Promise.resolve(err);
  }
);
export default CustomAxios;
