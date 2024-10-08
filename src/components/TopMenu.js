import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MemuDetail from "./MemuDetail";

const TopMenu = () => {
  const [megaMenu, setMegaMenu] = useState(false);
  const handleClickMenu = (e) => {
    setMegaMenu(!megaMenu);
  };
  return (
    <div>
      <div id="topMenu">
        <div className="menuBar" onClick={handleClickMenu}>
          {megaMenu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars-staggered"></i>
          )}
        </div>
        <h2>
          <NavLink to={"/"}>THUẬN PHÁT</NavLink>
        </h2>
      </div>
      <div
        className="megaMenu"
        style={{ height: megaMenu ? "calc(100vh - 60px)" : 0 }}
        onClick={handleClickMenu}
      >
        <MemuDetail />
      </div>
    </div>
  );
};

export default TopMenu;
