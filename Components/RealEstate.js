import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "./fertilizer.jpg";
// import axios from 'axios';

const RealEstate = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    MediumDesktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 4,
    },
    Mobile: {
      breakpoint: { max: 768, min: 576 },
      items: 4,
      slidesToSlide: 4,
    },
    Minimobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <>
      <div className="Category-slider">
        <div className="category-stick-img">
          <img src="./img/card/construction.jpg" alt="construction" />
        </div>
        <Carousel
          responsive={responsive}
          draggable={false}
          ssr={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true}
        >
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
          <div className="category-card">
            <img
              style={{ maxHeight: "135px", minHeight: "135px" }}
              src={image}
              alt="img"
            />
            <h3 className="category-name">Fertilizer</h3>
            {/* <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti.
            </p> */}
            <button className="btn-category">View More</button>
          </div>
         
        </Carousel>
      </div>
    </>
  );
};
export default RealEstate;
