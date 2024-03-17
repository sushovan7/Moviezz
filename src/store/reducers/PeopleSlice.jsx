import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peopleInfo: null,
};

export const PeopleSlice = createSlice({
  name: "People",
  initialState,
  reducers: {
    loadPeople: (state, action) => {
      state.peopleInfo = action.payload;
    },
    removePeople: (state, action) => {
      state.peopleInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadpeople, removepeople } = PeopleSlice.actions;

export default PeopleSlice.reducer;
