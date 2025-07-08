import React from "react";
import { useSelector } from "react-redux";

const GoldPage = () => {
  const { gold } = useSelector((state) => state.goldSlice);
  console.log(gold);
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Gold</h1>
        </div>
      </div>
    </div>
  );
};

export default GoldPage;
