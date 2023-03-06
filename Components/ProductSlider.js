import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "../Cssfiles/ProductSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Productcard from "./Productcard";
// import img2 from "../Components/product-img.jpeg";
// import axios from 'axios';

const ProductSlider = () => {
  // const [state, set] = useState([]);
  // const data = async () => {
  //   try {
  //     const url = "https://api.pujakaitem.com/api/products";
  //     const data = await fetch(url);
  //     const res = await data.json();
  //     set(res);
  //   } catch (err) {}
  // };
  // useEffect(() => {
  //   data();
  // });

  // const [state, setdata] = useState([])
  // useEffect(()=>{
  //   axios.get('https://api.pujakaitem.com/api/products')
  //   .then(res=>{
  //     console.log(res)
  //     setdata(res.data)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // },[])

  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 6,
    },
    MediumDesktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 6,
      slidesToSlide: 6,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 6,
      slidesToSlide: 6,
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
      <div className="container-slider">
        <Carousel
          responsive={responsive2}
          removeArrowOnDeviceType={["tablet", "mobile"]}
           draggable={false}
           keyBoardControl={true}
           ssr={true}
        >
          {/* {state.map((data) => { */}
            {/* return ( */}
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
              <div className="product-slider-card">
                <img
                  className="product--img"
                  src="../img/injection.jpg"
                  alt="product"
                  style={{ maxHeight: "135px", minHeight: "135px" }}
                />
                <div className="product-details">
                  <h3>Shirt</h3>
                  <p className="seller-name">Sold By: Ram</p>
                </div>
                <button>Send Enquiry</button>
              </div>
            {/* ); */}
          {/* })} */}
        </Carousel>
      </div>
    </>
  );
};

export default ProductSlider;
