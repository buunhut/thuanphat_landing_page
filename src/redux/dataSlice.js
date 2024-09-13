import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  info: {
    company: "THUAN PHAT TECHNOLOGY TRADING COMPANY LIMITED",
    address:
      "115/26 Phan Dang Luu Street, 7 Ward, Phu Nhuan District, Ho Chi Minh City, Vietnam",
    tax: "0312617510",
    bankAccount: "172 580 999 - Asia Commercial Bank - Binh Tay Branch",
    website: "congtythuanphat.com",
    phone: "909240886",
    email: "nhut.nta@gmail.com",
    belong: "© 2014 THUAN PHAT Company, All rights reserved.",
  },

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
