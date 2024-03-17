import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvInfo: null,
};

export const TvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTv: (state, action) => {
      state.tvInfo = action.payload;
    },
    removeTv: (state, action) => {
      state.tvInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadTv, removeTv } = TvSlice.actions;

export default TvSlice.reducer;
