import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SignupCss from "../pages/Login/LoginPage.module.css";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";

function PictureCarousel() {
  return (
    <Carousel
      fade
      controls={false}
      indicators={false}
      interval={3000}
      pause={false}
    >
      <Carousel.Item>
        <img
          className={`${SignupCss.left_img} d-block w-100`}
          src={pic1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${SignupCss.left_img} d-block w-100`}
          src={pic2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${SignupCss.left_img} d-block w-100`}
          src={pic3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${SignupCss.left_img} d-block w-100`}
          src={pic4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${SignupCss.left_img} d-block w-100`}
          src={pic5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PictureCarousel;
