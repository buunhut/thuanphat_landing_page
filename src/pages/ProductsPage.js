import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const ProductsPage = () => {
  const { product } = useSelector((state) => state.dataSlice);
  console.log(product);
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <div className="contentItemWrap">
            {product?.map((item, index) => {
              return <ProductItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
