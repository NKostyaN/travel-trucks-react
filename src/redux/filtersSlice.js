import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilterName = (state) => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
