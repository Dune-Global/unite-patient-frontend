import { IAccessToken } from "@/types/jwt";
import { decode } from "jsonwebtoken";

export const getUser = () => {
  try {
    const token = sessionStorage.getItem("ACCESSTOKEN")?.slice(7) || "";
    const decoded = decode(token);
    if (decoded && typeof decoded !== "string") {
      const user: IAccessToken = decoded as IAccessToken;
      return user;
    }
  } catch (error) {
    return null;
  }
};
