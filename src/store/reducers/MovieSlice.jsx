import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieInfo: null,
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovie: (state, action) => {
      state.movieInfo = action.payload;
    },
    removeMovie: (state, action) => {
      state.movieInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMovie, removeMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
