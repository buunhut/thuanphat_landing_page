import React from "react";
import { NavLink } from "react-router-dom";

const MemuDetail = ({ handleClickMenu, close }) => {
  return (
    <ul>
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
