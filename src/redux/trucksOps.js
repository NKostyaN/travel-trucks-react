import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const url = new URL(API_URL);
// url.searchParams.append("completed", false);
// url.searchParams.append("page", 1);
// url.searchParams.append("limit", 10);

export const fetchAllTrucks = createAsyncThunk(
  "trucks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchTrucks/perPage",
  async (params, thunkAPI) => {
    // url.searchParams.append({ params });
    // url.searchParams.append("page", { page });
    // url.searchParams.append("limit", 4);
    try {
      // const response = await axios.get(url);
      // const params = new URLSearchParams();
      // params.append("p", 1);
      // params.append("l", 4);
      // const response = await axios.get(API_URL, params);
      const response = await axios.get(
        `${API_URL}/?${params.searchParams}&page=${params.page}&limit=4`
      );
      // console.log("response", response);

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
