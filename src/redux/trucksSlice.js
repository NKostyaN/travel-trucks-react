import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { fetchTrucks, addContact, deleteContact } from "./trucksOps";
import { fetchAllTrucks, fetchTrucks, getTruck } from "./trucksOps";
import { selectFilter } from "./filtersSlice";

const initialState = {
  items: [],
  truck: {},
  page: 1,
  totalResults: 0,
  loading: false,
  error: null,
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    reset: () => initialState,
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrucks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.totalResults = action.payload.total;
      })
      .addCase(fetchAllTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTrucks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.totalResults = action.payload.total;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTruck.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTruck.fulfilled, (state, action) => {
        state.loading = false;
        state.truck = action.payload;
        console.log(action);
      })
      .addCase(getTruck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
export const selectTrucks = (state) => {
  return state.trucks.items;
};
export const selectTruck = (state) => {
  return state.trucks.truck;
};
export const { setPage, reset } = trucksSlice.actions;

export const selectFilteredTrucks = createSelector(
  [selectTrucks, selectFilter],
  (trucks, filter) => {
    // console.log("trucks", trucks);
    // console.log("filter", filter);
    return trucks;
    // return trucks?.filter((truck) =>
    //   truck.name.toLowerCase().includes(filter.toLowerCase())
    // );
  }
);
