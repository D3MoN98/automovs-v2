// store.js
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";
import contactReducer from "./contactSlice";
import serviceReducer from "./serviceSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    contact: contactReducer,
    booking: bookingReducer,
    // Add other reducers as needed
  },
});

export default store;
