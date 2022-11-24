import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './carousel.css'


// import SimpleImageSlider from 'react-simple-image-slider'
// importing
import appl from "../images/1250x7032.jpg";
import appl2 from "../images/1250x7035.jpg";
import appl3 from "../images/1250x7038.jpg";
import appl4 from "../images/1250x7039.jpg";
// import Slider from "react-slick";

function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
//   <div>
// <Slider>
//   <div>
//     <img src={appl} alt="appl"/>
//   </div>
//   <div>
//     <img src={appl2} alt="appl"/>
//   </div>
//   <div>
//     <img src={appl3} alt="appl"/>
//   </div>
//   <div>
//     <img src={appl4} alt="appl"/>
//   </div>
 
// </Slider>
//   </div>
  );
}
export default Carousel;
