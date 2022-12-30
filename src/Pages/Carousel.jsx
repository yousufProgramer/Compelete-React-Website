import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
export default class Carousel extends Component {
  render() {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="mainCu">
      <div className="container">
      
       <div className="slickSilder px-5 py-2 ml-5" >
       <Slider {...settings}>
          <div className="imSize">

            <img src="/clients/client-1.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-2.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-3.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-4.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-5.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-6.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-7.png" alt="" />
          </div>
          <div>
          <img src="/clients/client-8.png" alt="" />
          </div>
        </Slider>
       </div>
      </div>
      </div>
    );
  }
}
