import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

// importing 
import appl from '../images/1250x7032.jpg';
import appl2 from '../images/1250x7035.jpg';
import appl3 from '../images/1250x7038.jpg';
import appl4 from '../images/1250x7039.jpg';

const Slider1 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
  

    <div >
    <Slider {...settings}>
    <div>
        <img src={appl} alt="appl" style={{width:"100%",heigh: "50vh" }}/>
    </div>
    <div>
        <img src={appl2} alt="appl" style={{width:"100%",heigh: "50vh"}}/>
    </div>
    <div>
        <img src={appl3} alt="appl" style={{width:"100%",heigh: "50vh"}}/>
    </div>
    <div>
        <img src={appl4} alt="appl" style={{width:"100%",heigh: "50vh"}}/>
    </div>
    
 
    </Slider>
        <div className='buttonpart'>
        {/* <button class="w3-button" onclick="plusDivs(-1)"> Prev</button>
        <button class="w3-button" onclick="plusDivs(1)">Next </button> */}
        </div>
  </div>
  )
}

export default Slider1