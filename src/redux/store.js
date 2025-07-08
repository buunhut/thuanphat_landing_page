import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import goldSlice from "./goldSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    goldSlice,
  },
});
