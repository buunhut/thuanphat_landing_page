import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="productItemWrap">
      <div className="productItem">
        <h2>{item}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
