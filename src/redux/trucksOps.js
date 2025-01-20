import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchTrucks/perPage",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_URL}/?${params.searchParams}&page=${params.page}&limit=4`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTruck = createAsyncThunk(
  "trucks/getTruck",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
