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
  service: [
    "repair",
    "consulting",
    "design",
    "printing",
    "advertising",
    "construction",
    "rental",
    "traning",
    "support",
  ],
  event: [
    {
      date: "2024-01-10",
      title: "Kỷ niện 10 năm thành lập",
      content:
        "Kỷ niện 10 năm thành lập công ty. Hoạt động trong lĩnh vực CNTT, CCTV...,",
      img: [],
    },
    {
      date: "2024-08-25",
      title: "Back to school",
      content:
        "Ngày tất cả các học sinh trên cả nước tựu trường, khai giảng năm học mới",
      img: [],
    },
    {
      date: "2024-09-02",
      title: "Lễ Quốc Khánh Nước Cộng Hoà Xã Hội Chủ Nghĩa Việt Nam",
      content:
        "Mừng ngày giải phóng dân tộc và thống nhất đất nước ngày 09/09/1975",
      img: [],
    },
    {
      date: "2024-09-14",
      title: "Trung Thu festival",
      content:
        "Lễ hội trung thu hàng năm được tổ chức cho các em vui chơi, tuy nhiên hôm nay trời mưa to gió lớn kèm theo bảo táp phong ba, nên huỷ",
      img: [],
    },
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
