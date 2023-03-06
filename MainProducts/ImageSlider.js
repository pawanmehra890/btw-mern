import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MainProductsCss/ProductPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper";

const ProductImagesSlider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>

        <Swiper
          loop={true}
          autoscrolloffset={1}
          spaceBetween={10}
          navigation={true}
          autoplay
          modules={[Navigation, Thumbs, Autoplay]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
        >
          {props.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} className='mx-5' alt="product images" />
            </SwiperSlide>
          ))}
        </Swiper>
      
      <Swiper
        onSwiper={setActiveThumb}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

ProductImagesSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImagesSlider;
