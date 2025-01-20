import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: "",
  location: "",
  transmission: "",
  engine: "",
  form: "",
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectFilter = (state) => state.filters;
export const filtersReducer = filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;
