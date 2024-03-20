import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  pageName: string;
  pageNumber?: number;
}

const initialState: PageState = {
  pageName: "Overview",
  pageNumber: 0,
};

const pageStateSlice = createSlice({
  name: "pageState",
  initialState,
  reducers: {
    setPageName(state, action: PayloadAction<string>) {
      state.pageName = action.payload;
    },
    setPageNumber(state, action: PayloadAction<number>) {
        state.pageNumber = action.payload;
    },
  },
});

export const { setPageName, setPageNumber } = pageStateSlice.actions;
export default pageStateSlice.reducer;
