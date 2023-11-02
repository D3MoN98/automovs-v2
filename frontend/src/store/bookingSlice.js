// bookingSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    status: "idle",
    error: null,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(storeBooking.pending, (state) => {
        state.status = "loading";
      })
      .addCase(storeBooking.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(storeBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const storeBooking = createAsyncThunk(
  "data/storeBooking",
  async (bookingData, thunkAPI) => {
    try {
      const response = await axios.post(`api/booking`, bookingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const bookingAction = bookingSlice.actions;

export default bookingSlice.reducer;
