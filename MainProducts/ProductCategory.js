import React from "react";
import "./MainProductsCss/ProductCategory.css";
import { Link } from "react-router-dom";

function ProductCategory() {
  return (
    <>
      <div className="Product-Category-heading">
        <h1>Agriculture</h1>
      </div>
      <div className="product-category--content ">
        <div id="product-cat-cont">
          <Link
            to="/product-subcat"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="product--category--card">
              <img src="../img/vegetables.png" alt="rice" />
              <h4>Vegetable</h4>
            </div>
          </Link>
          <div className="product--category--card">
            <img src="../img/chilli.png" alt="rice" />
            <h4>Spice</h4>
          </div>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Vegetables</h4>
          </div>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Seeds</h4>
          </div>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Pulses</h4>
          </div>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Rice</h4>
          </div>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Rice</h4>
          </div>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Rice</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCategory;
