// serviceSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    service: {
      name: "",
      description: "",
      service_type_id: "",
      image: "",
    },
    status: "idle",
  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },

    setService: (state, action) => {
      state.service = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(updateService.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

/**
 * fetch services
 * @returns
 */
export const fetchServices = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("api/service");
    const services = await response.data;
    dispatch(setServices(services.data)); // dispatching the data to store state
  } catch (error) {
    return error;
  }
};

/**
 * fetch service
 * @param {*} data
 * @returns
 */
export const fetchService = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`api/service/${id}`);
    const service = await response.data;
    dispatch(setService(service.data)); // dispatching the data to store state
  } catch (error) {
    return error;
  }
};

export const updateService = createAsyncThunk(
  "data/updateService",
  async (serviceData, thunkAPI) => {
    try {
      const response = await axios.put(
        `api/service/${serviceData.id}`,
        serviceData
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const { setServices, setService } = serviceSlice.actions;
export default serviceSlice.reducer;
