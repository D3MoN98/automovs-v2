// store.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import bookingReducer from "./bookingSlice";
import contactReducer from "./contactSlice";
import serviceReducer from "./serviceSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    contact: contactReducer,
    booking: bookingReducer,
    auth: authReducer,
    // Add other reducers as needed
  },
});

export default store;
