import React from "react";
import { Link } from "react-router-dom";
import "./MainProductsCss/ProductCategory.css";

function ProductSubCategory() {
  return (
    <>
      <div className="Product-Category-heading">
        <h1>Vegetables</h1>
      </div>
      <div className="product-category--content ">
        <div className="" id="product-cat-cont">
          <Link to='/product-inner-sub-cat' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="product--category--card">
              <img src="../img/chilli.png" alt="rice" />
              <h4>Chilli</h4>
            </div>
          </Link>
          <div className="product--category--card">
            <img src="../img/rice.png" alt="rice" />
            <h4>Brown Rice</h4>
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
export default ProductSubCategory;
