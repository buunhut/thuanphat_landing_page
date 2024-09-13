import React from "react";
import MemuDetail from "./MemuDetail";
import { useSelector } from "react-redux";

const Footer = () => {
  const { info } = useSelector((state) => state.dataSlice);
  return (
    <footer>
      <div className="content">
        <div className="address">
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <b>{info?.company}</b>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              {info?.address}
            </li>
            <li>
              <i className="fa-solid fa-file-circle-exclamation"></i>
              {info?.tax}
            </li>
            <li>
              <i className="fa-solid fa-building-columns"></i>
              {info?.bankAccount}
            </li>
            <li>
              <i className="fa-solid fa-globe"></i>
              <a href={`https://${info?.website}`}>{info?.website}</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href={`tel:+84${info?.phone}`}>0{info?.phone}</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${info?.email}`}>{info?.email}</a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <MemuDetail />
        </div>
      </div>
      <p>{info?.belong}</p>
    </footer>
  );
};

export default Footer;
