import React from "react";
import { NavLink } from "react-router-dom";

const MemuDetail = ({ handleClickMenu, close }) => {
  return (
    <ul>
      {/* {close ? (
        <li className="close" onClick={handleClickMenu}>
          <i className="fa-solid fa-xmark"></i>
        </li>
      ) : null} */}

      <li>
        <NavLink to={"/"} onClick={handleClickMenu}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"products"} onClick={handleClickMenu}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to={"services"} onClick={handleClickMenu}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"contact"} onClick={handleClickMenu}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default MemuDetail;
