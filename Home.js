import React from "react";
import Hotlisting from "./Components/Hotlisting";
import ProductSlider from "./Components/ProductSlider";
import Topsuppliers from "./Components/Topsuppliers";
import "./Cssfiles/Fashionslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import AgricultueSlider from "./Components/AgricultureSlider";
import Fashionslider from "./Components/Fashionslider";
import FoodSlider from "./Components/FoodSlider";
import Pharma from "./Components/Pharma";
import BrassHardware from "./Components/BrassHardware";
import RealEstate from "./Components/RealEstate";
import Furniture from "./Components/Furniture";
import HomeTextile from "./Components/Home-textile";
import PopUp from "./Components/PopUp";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <PopUp />
      <div className="d-flex main-container-banner">
        {" "}
        <div className="banner  col-md-8">
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="banner-img-sec-2 carousel-item active">
                <img
                  src="./img/website-banner1.png"
                  className="d-block w-100"
                  alt=".."
                />
              </div>
              <div className="banner-img-sec-2 carousel-item">
                <img
                  src="./img/website-banner2.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="banner-img-sec-2 carousel-item">
                <img
                  src="./img/website-banner3.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* latest deals */}
        <div className="col-md-4 auto-slide-deal">
          <div>
            <section className="relatedBuyOfferComponent transparent-panel">
              <h4 className="hd-rd-brdr hd-inner-link mb-1">
                Tell us what you need?
              </h4>
              <div id="queryForm">
                <div className="form row">
                  <div className="">
                    {" "}
                    <label>Requirements</label>{" "}
                    <input
                      type="text"
                      name="products_want"
                      className=" valid input-form-txt"
                      placeholder="Enter product/service name"
                      autocomplete="off"
                      required=""
                      aria-required="true"
                    />{" "}
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <input
                      type="text"
                      name="full_name"
                      className=" input-form-txt"
                      placeholder="Full Name"
                      title="Please enter your Full Name here"
                      autocomplete="name"
                      required=""
                      aria-required="true"
                    />{" "}
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <input
                      type="email"
                      name="email"
                      className="input-form-txt"
                      placeholder="Enter your email"
                      title="Please enter your Email Address here"
                      autocomplete="email"
                      required=""
                      aria-required="true"
                    />{" "}
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <input
                      type="text"
                      name="company_name"
                      className=" valid input-form-txt"
                      placeholder="Company Name"
                      title="Please enter your Company Name here"
                      autocomplete="organization"
                      required=""
                      aria-required="true"
                    />{" "}
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <input
                      type="phone no"
                      className="valid input-form-txt"
                      placeholder="Contact No."
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    ></input>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-6">
                    {" "}
                    <select
                      className=" valid input-form-select"
                      name="type"
                      required=""
                      aria-required="true"
                      aria-invalid="false"
                    >
                      {" "}
                      <option value="seller" selected="">
                        Seller
                      </option>
                      <option value="buyer">Buyer</option>{" "}

                    </select>{" "}
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-6">
                    <button className="query-form-submit">Submit</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="relatedBuyOfferComponent transparent-panel">
              <h4 className="hd-rd-brdr hd-inner-link">
                Latest Sell Offers
                <a href="/" title="Related Buy Offers">
                  View More
                </a>
              </h4>
              <div className="latest-buyers fixedHeight ticker">
                <div className="list-row">
                  <div className="col-md-12">
                    <ul style={{ transform: "rotate(-90deg)" }}>
                      <Marquee
                        className="marq-slider-details"
                        direction="right"
                        speed={20}
                        gradientColor={[14, 81, 123]}
                        gradientWidth={45}
                      >
                        <div
                          style={{
                            width: "400px",
                            height: "400px",
                            transform: "rotate(90deg)",
                          }}
                        >
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                          <li>
                            <a href="/" title="">
                              <img
                                className="country-flag"
                                src="./img/india.png"
                                alt=""
                              />
                              <span className="country-name-buyer buyer-cont truncate">
                                Kolkata
                              </span>
                              <span className="lst-buyer-text buyer-cont truncate">
                                Raju Teaders
                              </span>
                              <small className="date">20 Dec, 2022</small>
                            </a>
                          </li>
                        </div>
                      </Marquee>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Section 3 => Heading */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Our Top Categories</p>
        </div>
      </div>

      {/* Our Top Categories */}
      <div className="top-categories container-fluid">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-interval="false"
          data-touch="true"
        >
          <div className=" carousel-inner">
            <div className="carousel-item active">
              {/*  First slide  of Top Categories */}

              <div className="top-cat">
                <div className="top-cat-items col-md-2">
                  <Link
                    to="product-category"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <div className="top-cat-icon icon1">
                      <img src="./img/Agriculture.png" alt="" />
                      <div className="top-cat-name">
                        <p>agriculture</p>
                      </div>
                    </div>
                  </Link>
                  <div className="top-cat-icon icon2">
                    <img src="./img/AutoMobile.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon3">
                    <img src="./img/Chemicals.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon4">
                    <img src="./img/computer.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon5">
                    <img src="./img/Consumer-Electronics.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon6">
                    <img src="./img/Energy & Power.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon7">
                    <img src="./img/food.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon8">
                    <img src="./img/Hospital & Medical.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon9">
                    <img src="./img/Pharmaceuticals.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon10">
                    <img src="./img/Shopping.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon11">
                    <img src="./img/1624364010.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon12">
                    <img src="./img/Energy & Power.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second slide of Top Categories */}

            <div className="carousel-item">
              <div className="top-cat">
                <div className="top-cat-items col-md-2">
                  <div className="top-cat-icon icon1">
                    <img src="./img/Agriculture.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon2">
                    <img src="./img/AutoMobile.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon3">
                    <img src="./img/Chemicals.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon4">
                    <img src="./img/computer hs.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon5">
                    <img src="./img/Consumer-Electronics.png" alt="" />
                    <div className="top-cat-name">
                      <p>HEllo</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon6">
                    <img src="./img/Energy & Power.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon7">
                    <img src="./img/food.png" alt="" />
                    <div className="top-cat-name">
                      <p>Hello</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon8">
                    <img src="./img/Hospital & Medical.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon9">
                    <img src="./img/Pharmaceuticals.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon10">
                    <img src="./img/Shopping.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon11">
                    <img src="./img/1624364010.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon12">
                    <img src="./img/Energy & Power.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third slide of top Categories */}

            <div className="carousel-item">
              <div className="top-cat">
                <div className="top-cat-items col-md-2">
                  <div className="top-cat-icon icon1">
                    <img src="./img/Agriculture.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon2">
                    <img src="./img/AutoMobile.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon3">
                    <img src="./img/Chemicals.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon4">
                    <img src="./img/computer hs.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon5">
                    <img src="./img/Consumer-Electronics.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon6">
                    <img src="./img/Energy & Power.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon7">
                    <img src="./img/food.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon8">
                    <img src="./img/Hospital & Medical.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon9">
                    <img src="./img/Pharmaceuticals.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon10">
                    <img src="./img/Shopping.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon11">
                    <img src="./img/1624364010.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                  <div className="top-cat-icon icon12">
                    <img src="./img/Energy & Power.png" alt="" />
                    <div className="top-cat-name">
                      <p>agriculture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="top-cat-nxt-1"
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              id="top-cat-nxt-2"
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/*  Section 7 => Feature Products */}

      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Feature products</p>
        </div>
      </div>

      {/* Slider 1 FEATURE CATEGORIES*/}
      <ProductSlider />

      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Hot Listing</p>
        </div>
      </div>

      {/* Slider 2 HOT LISTING */}
      <Hotlisting></Hotlisting>

      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Top Suppliers</p>
        </div>
      </div>

      {/* Our top suppliers */}
      <Topsuppliers />

      {/* First Banners section */}
      <div className="first-banner">
        <div>
          <img className="banner-img" src="./img/banner1.png" alt="Banner1" />
        </div>
        <div>
          <img className="banner-img" src="./img/banner2.png" alt="Banner" />
        </div>
      </div>

      {/* Fashion */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Agricultue</p>
        </div>
      </div>

      {/*Agricultue slider */}
      <AgricultueSlider />

      {/* second Banner section */}
      {/* Banners section */}
      <div className="first-banner">
        <div style={{ margin: "1px" }}>
          <img className="banner-img" src="./img/banner1.png" alt="Banner1" />
        </div>
        <div style={{ margin: "1px" }}>
          <img className="banner-img" src="./img/banner2.png" alt="Banner1" />
        </div>
        <div style={{ margin: "1px" }}>
          <img className="banner-img" src="./img/banner2.png" alt="Banner1" />
        </div>
      </div>

      {/* Food & Beverage */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Food & Beverage</p>
        </div>
      </div>
      <FoodSlider />

      {/* Fashion */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Apparel & Fashion</p>
        </div>
      </div>

      {/*Fashion slider */}
      <Fashionslider />

      {/* Pharmaceuticals */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Pharmaceuticals</p>
        </div>
      </div>

      {/*Pharmaceuticals*/}
      <Pharma />

      {/* Brass and Hardware */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Brass Hardware & Components</p>
        </div>
      </div>

      {/* Brass and Hardware slider*/}
      <BrassHardware />

      {/* Construction & Real Estate */}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Construction & Real Estate</p>
        </div>
      </div>

      {/*Construction & Real Estate slider*/}
      <RealEstate />

      {/*Furniture*/}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p>Furniture</p>
        </div>
      </div>

      {/*Furniture slider*/}
      <Furniture />

      {/* Home Textiles & Furnishing*/}
      <div className="category-txt-heading">
        <div className="txt-cat">
          <p> Home Textiles & Furnishing</p>
        </div>
      </div>

      {/* Home Textiles & Furnishing slider*/}
      <HomeTextile />

      {/* Why shop with us Banner */}
      <div className="banner-shopping">
        <img
          id="banner-shopping-mobile"
          src="./img/banner-mobile.jpg"
          alt="banner"
        />
        <img id="banner-shopping-pc" src="./img/banner4.jpg" alt="banner" />
      </div>

      {/* Testinomials */}
      <section className="section section-testimonial container">
        <div className="testimonial-cont">
          <h2 className="common-heading">Testimonials</h2>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, optio aliquam! Quidem, dolorum velit doloribus sapiente
                dignissimos impedit eos cupiditate distinctio iure ipsam
                veritatis magni ullam non voluptates suscipit pariatur.
              </p>
            </div>
            <div className="swiper-client-data">
              <figure>
                <img src="./img/model.jpg" alt="userpics" />
              </figure>
              <div className="client-data-details">
                <p style={{ fontWeight: "bold" }}>Aman Gwari</p>
                <p>Trader</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Section end */}
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, optio aliquam! Quidem, dolorum velit doloribus sapiente
                dignissimos impedit eos cupiditate distinctio iure ipsam
                veritatis magni ullam non voluptates suscipit pariatur.
              </p>
            </div>
            <div className="swiper-client-data">
              <figure>
                <img src="./img/model.jpg" alt="" />
              </figure>
              <div className="client-data-details">
                <p style={{ fontWeight: "bold" }}>Aman Gwari</p>
                <p>Trader</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Section end */}
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, optio aliquam! Quidem, dolorum velit doloribus sapiente
                dignissimos impedit eos cupiditate distinctio iure ipsam
                veritatis magni ullam non voluptates suscipit pariatur.
              </p>
            </div>
            <div className="swiper-client-data">
              <figure>
                <img src="./img/model.jpg" alt="" />
              </figure>
              <div className="client-data-details">
                <p style={{ fontWeight: "bold" }}>Aman Gwari</p>
                <p>Trader</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Section end */}
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, optio aliquam! Quidem, dolorum velit doloribus sapiente
                dignissimos impedit eos cupiditate distinctio iure ipsam
                veritatis magni ullam non voluptates suscipit pariatur.
              </p>
            </div>
            <div className="swiper-client-data">
              <figure>
                <img src="./img/model.jpg" alt="" />
              </figure>
              <div className="client-data-details">
                <p style={{ fontWeight: "bold" }}>Aman Gwari</p>
                <p>Trader</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Section end */}
        </Swiper>
      </section>
    </>
  );
};

export default Home;
