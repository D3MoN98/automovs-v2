// authSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const initialState = {
  user: null,
  auth_token: null,
  token_type: null,
  isAuthenticated: false,
  loading: "idle",
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    try {
      await axios.get(`/sanctum/csrf-cookie`);

      const response = await axios.post("/api/login", credentials);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.get("/api/logout");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { user, auth_token, token_type } = action.payload.data;
        state.loading = "idle";
        state.isAuthenticated = true;
        state.user = user;
        state.auth_token = auth_token;
        state.token_type = token_type;

        localStorage.setItem("authToken", auth_token);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.auth_token = null;
        state.token_type = null;

        localStorage.removeItem("authToken");
      });
  },
});

export default authSlice.reducer;
