import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorState {
  doctorList: any[];
}

const initialState: DoctorState = {
  doctorList: [],
};

const doctorStateSlice = createSlice({
  name: "doctorSlice",
  initialState,
  reducers: {
    setDoctorList(state, action: PayloadAction<any[]>) {
      state.doctorList = action.payload;
    },
  },
});

export const { setDoctorList } = doctorStateSlice.actions;
export default doctorStateSlice.reducer;
