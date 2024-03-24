import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReportState {
  reportList: any[];
  selectedReport: any;
  isModalOpen: boolean;
}

const initialState: ReportState = {
  reportList: [],
  selectedReport: null,
  isModalOpen: false,
};

const reportStateSlice = createSlice({
  name: "reportSlice",
  initialState,
  reducers: {
    setReportList(state, action: PayloadAction<any[]>) {
      state.reportList = action.payload;
    },
    setSelectedReport(state, action: PayloadAction<any>) {
      state.selectedReport = action.payload;
    },
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setReportList, setSelectedReport, setIsModalOpen } =
  reportStateSlice.actions;
export default reportStateSlice.reducer;
