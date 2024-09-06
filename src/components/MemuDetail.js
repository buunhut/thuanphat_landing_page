import React from "react";
import { NavLink } from "react-router-dom";

const MemuDetail = ({ handleClickMenu }) => {
  return (
    <ul>
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
