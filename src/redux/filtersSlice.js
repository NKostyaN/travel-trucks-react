import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // showFavorites: false,
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
    // changeLocationFilter: (state, action) => {
    //   state.location = action.payload;
    // },
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
// export const { changeLocationFilter, changeFilter } = filtersSlice.actions;
