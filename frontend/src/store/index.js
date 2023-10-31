// store.js
import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./serviceSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    // Add other reducers as needed
  },
});

export default store;
