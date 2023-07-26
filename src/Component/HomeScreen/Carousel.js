
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg"
          alt="Image 1"
          className="object-cover w-full h-64 md:h-96"
        />
      </div>
      <div>
        <img
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
          alt="Image 2"
          className="object-cover w-full h-64 md:h-96"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
