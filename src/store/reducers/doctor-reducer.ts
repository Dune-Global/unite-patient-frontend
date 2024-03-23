import { set } from "date-fns";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorState {
  doctorList: any[];
  appointmentList: any[];
  selectedDate: Date | null;
}

const initialState: DoctorState = {
  doctorList: [],
  appointmentList: [],
  selectedDate: null,
};

const doctorStateSlice = createSlice({
  name: "doctorSlice",
  initialState,
  reducers: {
    setDoctorList(state, action: PayloadAction<any[]>) {
      state.doctorList = action.payload;
    },
    setAppointmentList(state, action: PayloadAction<any[]>) {
      state.appointmentList = action.payload;
    },
    setSelectedDate(state, action: PayloadAction<Date | null>) {
      state.selectedDate = action.payload;
    },
  },
});

export const { setDoctorList, setAppointmentList, setSelectedDate } =
  doctorStateSlice.actions;
export default doctorStateSlice.reducer;
