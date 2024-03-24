import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoctorState {
  doctorList: any[];
  appointmentList: any[];
  selectedDate: Date | null;
  todayAppointments: any[];
  allAppointments: any[];
}

const initialState: DoctorState = {
  doctorList: [],
  appointmentList: [],
  selectedDate: null,
  todayAppointments: [],
  allAppointments: [],
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
    setTodayAppointments(state, action: PayloadAction<any[]>) {
      state.todayAppointments = action.payload;
    },
    setAllAppointments(state, action: PayloadAction<any[]>) {
      state.allAppointments = action.payload;
    },
  },
});

export const {
  setDoctorList,
  setAppointmentList,
  setSelectedDate,
  setAllAppointments,
  setTodayAppointments,
} = doctorStateSlice.actions;
export default doctorStateSlice.reducer;
