// serviceSlice.js
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

/**
 * fetch services
 * @param {*} data
 * @returns
 */
export const fetchServices = (data) => async (dispatch, getState) => {
  // Replace with your actual API call to fetch service
  try {
    const response = await fetch("http://127.0.0.1:8000/api/service");
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    const services = await response.json();
    dispatch(setServices(services.data)); // dispatching the data to store state
  } catch (error) {
    toast.error(`Something went wrong. ${error.message}`);
    // console.log(error.message);
  }
};

export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;
