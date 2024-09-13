import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const ServicesPages = () => {
  const { service } = useSelector((state) => state.dataSlice);

  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Services</h1>
          <div className="contentItemWrap">
            {service?.map((item, index) => {
              return <ProductItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPages;
