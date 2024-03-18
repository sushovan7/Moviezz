import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieInfo: null,
};

export const TvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadTv: (state, action) => {
      state.movieInfo = action.payload;
    },
    removeTv: (state, action) => {
      state.movieInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadTv, removeTv } = TvSlice.actions;

export default TvSlice.reducer;
