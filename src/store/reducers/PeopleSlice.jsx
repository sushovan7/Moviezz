import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieInfo: null,
};

export const PeopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadPeople: (state, action) => {
      state.movieInfo = action.payload;
    },
    removePeople: (state, action) => {
      state.movieInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadPeople, removePeople } = PeopleSlice.actions;

export default PeopleSlice.reducer;
