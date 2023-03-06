import React from "react";
import { Link } from "react-router-dom";
import "./MainProductsCss/ProductList.css";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

const ProductList = () => {
  return (
    <>
      <div className="Product-list-container">
        <div className="row">
          <div className="Fliter-side-bar col-md-3">
            <div className="aside">
              <span class="widget-title shop-sidebar">
                Browse Related Categories
              </span>
              <div className="is-divider small"></div>
              <div className="Related-category-list">
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1 related-cat-checkbox" style={{fontweight:300}} >
                  Red Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Red Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Bagan Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Assam Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Dargeling Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Red label Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Tata Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Rice"
                  data-input-change
                  // checked
                />
                <label htmlFor="Black-tea" className="mx-1">
                  Black Tea
                </label>
                <br />
              </div>
              <hr />

              {/* Business Type */}
              <span class="widget-title shop-sidebar">Business Type</span>
              <div className="is-divider small"></div>
              <div className="Business-type-list">
                <input
                  type="checkbox"
                  name="Related category"
                  value="WholeSeller"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Whole seller
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Retailer"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Retailer
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Manufracturar"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Manufacturer
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Manufracturar"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Distributer
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Manufracturar"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Trader
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Manufracturar"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Supplier
                </label>
                <br />
                <input
                  type="checkbox"
                  name="Related category"
                  value="Manufracturar"
                  data-input-change
                />
                <label htmlFor="Whole seller" className="mx-1">
                  Exporter
                </label>
                <br />
              </div>
            </div>
          </div>
          {/* <div className="vertical"></div> */}
          <div className="product-items col-md-9">
            <div className="Product-item--box">
              <div className="Product-image-section">
                <img src="../img/chilli1.png" alt="" />
              </div>
              <div className="Product-details-section">
                <h3 className="Product--name">Green Chilli</h3>
                <p className="Product-Price">Price Range :- 100-500 INR</p>
                <p className="Minimum-order-qty">Minimum Order Qty. :- 2 Ton</p>
                <p className="Packaging-type">Packaging Type :- Gunny Bag</p>
                <p className="Product-color">Color :- Green</p>
                <p className="country-origin">Made in India</p>
              </div>
              <div className="seller-details">
                <h4 className="Seller-company-name">Aman Import and Export</h4>
                <p className="seller-from">Rishikesh, Uttrakhand</p>
                <p className="seller-type">Manufacturer</p>
                <p className="seller-Experience">8 Years</p>
                <p className="costumer-type">Verified seller</p>
                <Link
                  to="/Product-Page"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <button className="btn-send-Enquiry">Send Enquiry</button>
                </Link>
              </div>
            </div>

            <div className="Product-item--box">
              <div className="Product-image-section">
                <img src="../img/chilli2.png" alt="" />
              </div>
              <div className="Product-details-section">
                <h3 className="Product--name">All Chilli</h3>
                <p className="Product-Price">Price Range :- 100-500 INR</p>
                <p className="Minimum-order-qty">Minimum Order Qty. :- 2 Ton</p>
                <p className="Packaging-type">Packaging Type :- Gunny Bag</p>
                <p className="Product-color">Color :- Green</p>
                <p className="country-origin">Made in India</p>
              </div>
              <div className="seller-details">
                <h4 className="Seller-company-name">Pawan Traders</h4>
                <p className="seller-from">Tehri, Uttrakhand</p>
                <p className="seller-type">Manufacturer</p>
                <p className="seller-Experience">8 Years</p>
                <p className="costumer-type">Verified seller</p>
                <button className="btn-send-Enquiry">Send Enquiry</button>
              </div>
            </div>
            <div className="Product-item--box">
              <div className="Product-image-section">
                <img src="../img/chilli.png" alt="" />
              </div>
              <div className="Product-details-section">
                <h3 className="Product--name">Red Chilli</h3>
                <p className="Product-Price">Price Range :- 100-500 INR</p>
                <p className="Minimum-order-qty">Minimum Order Qty. :- 2 Ton</p>
                <p className="Packaging-type">Packaging Type :- Gunny Bag</p>
                <p className="Product-color">Color :- Green</p>
                <p className="country-origin">Made in India</p>
              </div>
              <div className="seller-details">
                <h4 className="Seller-company-name">Shri Ram Traders</h4>
                <p className="seller-from">Ahemdabad, Gujrat</p>
                <p className="seller-type">Manufacturer</p>
                <p className="seller-Experience">8 Years</p>
                <p className="costumer-type">Verified seller</p>
                <button className="btn-send-Enquiry">Send Enquiry</button>
              </div>
            </div>

            {/* Pagination */}
            <div className="pages-slider">
              {/* <Stack spacing={2}>
                <Pagination count={10} className="page-move-color" />
              </Stack> */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ProductList;
