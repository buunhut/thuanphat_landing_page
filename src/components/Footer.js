import React from "react";
import MemuDetail from "./MemuDetail";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="address">
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <b>THUAN PHAT TECHNOLOGY TRADING COMPANY LIMITED</b>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              115/26 Phan Dang Luu, 7 Ward, Phu Nhuan Dictrict, Ho Chi Minh
              City, VietNam
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+84909240886">0909 240 886</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:nhut.nta@gmail.com">nhut.nta@gmail.com</a>
            </li>
            <li>
              <i className="fa-solid fa-globe"></i>
              <a href="https://congtythuanphat.com">congtythuanphat.con</a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <MemuDetail />
        </div>
      </div>
      <p>© 2014 THUAN PHAT Company, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
