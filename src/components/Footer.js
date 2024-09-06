import React from "react";
import MemuDetail from "./MemuDetail";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="address">
          <ul>
            <li>
              115/26 Phan Dang Luu, 7 Ward, Phu Nhuan Dictrict, Ho Chi Minh
              City, VietName
            </li>
            <li>0909240886</li>
            <li>nhut.nta@gmail.com</li>
          </ul>
        </div>
        <div className="menu">
          <MemuDetail />
        </div>
      </div>
      <p>@2024 - Code by zero</p>
    </footer>
  );
};

export default Footer;
