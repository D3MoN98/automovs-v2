// contactSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    error: null,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(storeContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(storeContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(storeContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const storeContact = createAsyncThunk(
  "data/storeContact",
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post(`api/contact`, contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const contactAction = contactSlice.actions;

export default contactSlice.reducer;
