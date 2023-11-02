// store.js
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import serviceReducer from "./serviceSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    contact: contactReducer,
    // Add other reducers as needed
  },
});

export default store;
