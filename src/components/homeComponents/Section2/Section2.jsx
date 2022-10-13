import React from "react";
import classes from "./Section2.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "../Slick/Slick";
import cleaning from "../../../images/cleaning1.png";
import electric from "../../../images/electrician2.png";
import truck from "../../../images/moving-truck2.png";
import saloon from "../../../images/haircut2.png";
import painting from "../../../images/artist2.png";
import eliipse from "../../../images/Ellipse1.png";

const Section2 = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // initialSlide: 0,
  };

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>
          Browse <span>Categories</span>
        </h2>

        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <Slick />
      {/* <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <Slider {...settings}>
            <div className={classes.cards}>
              <div>
                <img src={cleaning} alt="" />
              </div>
              <h3>Cleaning</h3>
              <span>36+ Services </span>
            </div>
            <div className={classes.cards}>
              <div>
                <img src={electric} alt="" />
              </div>
              <h3>Electric</h3>
              <span>36+ Services </span>
            </div>
            <div className={classes.cards}>
              <div>
                <img src={truck} alt="" />
              </div>
              <h3>Home Move</h3>
              <span>36+ Services </span>
            </div>
            <div className={classes.cards}>
              <div>
                <img src={saloon} alt="" />
              </div>
              <h3>Saloon & Spa</h3>
              <span>36+ Services </span>
            </div>
            <div className={classes.cards}>
              <div>
                <img src={painting} alt="" />
              </div>
              <h3>Painting </h3>
              <span>36+ Services </span>
            </div>
          </Slider>
        </div>
      </div> */}
      {/* <div className={classes.ellipse}>
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
      </div> */}
    </div>
  );
};

export default Section2;
