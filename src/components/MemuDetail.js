import React from "react";
import { NavLink } from "react-router-dom";

const MemuDetail = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ul>
      <li>
        <NavLink to={"/"} onClick={toTop}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"products"} onClick={toTop}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to={"services"} onClick={toTop}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"events"} onClick={toTop}>
          Events
        </NavLink>
      </li>
      <li>
        <NavLink to={"contact"} onClick={toTop}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default MemuDetail;
