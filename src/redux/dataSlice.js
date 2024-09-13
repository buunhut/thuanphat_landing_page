import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState = {
  login: false,
  product: [
    "computer",
    "lcd",
    "mouse, keyboard",
    "networking",
    "camera",
    "speaker",
    "software",
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateLogin(state, action) {
      state.listUser = action.payload;
    },
  },
});

export const { updateLogin } = dataSlice.actions;
export default dataSlice.reducer;
