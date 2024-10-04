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
        "Ngày tất cả các học sinh trên cả nước tựu trường, khai giảng năm học mới.",
      img: [],
    },
    {
      date: "2024-09-02",
      title: "Lễ Quốc Khánh Nước Cộng Hoà Xã Hội Chủ Nghĩa Việt Nam",
      content:
        "Mừng ngày giải phóng dân tộc và thống nhất đất nước ngày 02/09/1975.",
      img: [],
    },
    {
      date: "2024-09-14",
      title: "Trung Thu festival",
      content:
        "Lễ hội trung thu hàng năm tổ chức cho các em vui chơi, tuy nhiên năm nay do thời tiết xấu, trời mưa to gió lớn, nên huỷ.",
      img: [],
    },
    {
      date: "2024-10-04",
      title: "Tìm kiếm cộng tác viên",
      content:
        "Chúng tôi đang tìm kiếm cộng tác viên trong lĩnh vực CNTT, Marketting...,",
      img: [],
    },
  ],
  test: [
    {
      exam: 1,
      question: [
        {
          qId: 1,
          ask: "1 + 1 = ?",
          suggest: [
            { id: 1, content: "2" },
            { id: 2, content: "5" },
            { id: 3, content: "4" },
          ],
          correct: 1,
        },
        {
          qId: 2,
          ask: "2 * 2 = ?",
          suggest: [
            { id: 1, content: "2" },
            { id: 2, content: "8" },
            { id: 3, content: "4" },
          ],
          correct: 3,
        },
      ],
    },
    {
      exam: 2,
      question: [
        {
          qId: 1,
          ask: "10 / 2 = ?",
          suggest: [
            { id: 1, content: "2" },
            { id: 2, content: "5" },
            { id: 3, content: "4" },
          ],
          correct: 2,
        },
        {
          qId: 2,
          ask: "2 + 4 = ?",
          suggest: [
            { id: 1, content: "6" },
            { id: 2, content: "8" },
            { id: 3, content: "4" },
          ],
          correct: 1,
        },
      ],
    },
    {
      exam: 3,
      question: [
        {
          qId: 1,
          ask: "Bửu Đoàn mượn của anh Nhựt 100 Eur, chưa trả đồng nào. Hỏi Bửu Đoàn còn nợ Bửu Nhựt bao nhiêu Eur?",
          suggest: [
            { id: 1, content: "120 Eur" },
            { id: 2, content: "100 Eur" },
            { id: 3, content: "50 Eur" },
          ],
          correct: 2,
        },
        {
          qId: 2,
          ask: "Bửu Đoàn có chiếc Flycam bán được 150 Eur, Bửu Đoàn bán chiếc Flycam đó và trả tiền cho anh Nhựt, thì hỏi Bửu Đoàn còn lại bao nhiêu Eur?",
          suggest: [
            { id: 1, content: "50 Eur" },
            { id: 2, content: "60 Eur" },
            { id: 3, content: "40 Eur" },
          ],
          correct: 1,
        },
        {
          qId: 3,
          ask: "Một con bò có 4 cái chân, vậy hỏi bạn chứ 8 cái chân thì có bao nhiêu con bò?",
          suggest: [
            { id: 1, content: "2 con" },
            { id: 2, content: "1 con" },
            { id: 3, content: "3 con" },
          ],
          correct: 1,
        },
        {
          qId: 4,
          ask: "Gà cộng với lợn có chẵn 10 con, trong đó có 4 chân lợn thì hỏi có bao nhiêu chân gà?",
          suggest: [
            { id: 1, content: "2" },
            { id: 2, content: "9" },
            { id: 3, content: "18" },
          ],
          correct: 3,
        },
      ],
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
