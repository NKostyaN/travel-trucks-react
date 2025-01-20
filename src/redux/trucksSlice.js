import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, fetchTrucks, getTruck } from "./trucksOps";

const initialState = {
  items: [],
  truck: {},
  favorites: {},
  page: 1,
  totalResults: 0,
  loading: false,
  error: null,
  showFavorites: false,
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    reset: (state) => {
      state.items = [];
      state.truck = {};
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addToFavorites: (state, action) => {
      Object.assign(state.favorites, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(getTruck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchAll.rejected, (state, action) => {
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
export const selectFavorites = (state) => {
  return state.favorites;
};
export const { setPage, reset, addToFavorites } = trucksSlice.actions;
