import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
  trucks: trucksReducer,
  filters: filtersReducer,
});

export const store = configureStore({ reducer: rootReducer });
