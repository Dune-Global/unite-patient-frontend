import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchTerm: string;
  files: any[];
  loading: boolean;
  totalHits: number;
  page: number;
}

const initialState: SearchState = {
  searchTerm: "",
  files: [],
  loading: true,
  totalHits: 10,
  page: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setFiles(state, action: PayloadAction<any[]>) {
      state.files = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setTotalHits(state, action: PayloadAction<number>) {
      state.totalHits = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setSearchTerm, setFiles, setLoading, setTotalHits, setPage } =
  searchSlice.actions;
export default searchSlice.reducer;