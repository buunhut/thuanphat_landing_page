import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gold: [
    {
      name: "9999",
      price: 2400,
    },
    {
      name: "24k",
      price: 1400,
    },
  ],
};

const goldSlice = createSlice({
  name: "gold",
  initialState,
  reducers: {
    updateGold(state, action) {
      state.gold = action.payload;
    },
  },
});

export const { updateGold } = goldSlice.actions;
export default goldSlice.reducer;
