import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isEmailVerified: boolean;
  doctorId: string;
  firstName: string;
  lastName: string;
  email: string;
  refreshToken: string;
  accessToken: string;
  imageUrl: string;
}

const initialState: AuthState = {
  isAuth: false,
  isEmailVerified: false,
  doctorId: "",
  firstName: "",
  lastName: "",
  email: "",
  refreshToken: "",
  accessToken: "",
  imageUrl: "",
};

const authStateSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setIsEmailVerified(state, action: PayloadAction<boolean>) {
      state.isEmailVerified = action.payload;
    },
    setDoctorId(state, action: PayloadAction<string>) {
      state.doctorId = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setImageUrl(state, action: PayloadAction<string>) {
      state.imageUrl = action.payload;
    },
    
  },
});

export const {
  setIsAuth,
  setIsEmailVerified,
  setDoctorId,
  setAccessToken,
  setImageUrl,
  setRefreshToken,
  setEmail,
  setFirstName,
  setLastName
} = authStateSlice.actions;
export default authStateSlice.reducer;
