import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import ProductCard from "./ProductCard";
import img from "../Components/supplier.svg";
import axios from "axios";
import '../Cssfiles/Topsuppliers.css'

const Topsuppliers = () => {
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

  const [state, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.pujakaitem.com/api/products")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="top-supplier">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          keyBoardControl={true} 
          draggable={false}
        >
          {state.map((data) => {
            return (
              <div className="supplier-container">
                <img
                  className="supplier-img"
                  src={img}
                  alt="supplier"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Topsuppliers;
