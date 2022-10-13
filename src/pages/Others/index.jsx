import React from "react";
import classes from "./Others.module.css";
import service from "../../images/customer-support2.png";
import IMAGE43 from "../../images/image 43.png";
import experience from "../../images/experience2.png";
import cloud from "../../images/cloud2.png";
import clock from "../../images/wall-clock2.png";
import payment from "../../images/credit-card2.png";
import support from "../../images/support2.png";
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import Dot from "../../images/Ellipse 32.png";
import cleaning from "../../images/cleaning1.png";
import electric from "../../images/electrician2.png";
import truck from "../../images/moving-truck2.png";
import saloon from "../../images/haircut2.png";
import painting from "../../images/artist2.png";
import IMAGE44 from "../../images/image 44.png";
import IMAGE45 from "../../images/image 45.png";
import IMAGE46 from "../../images/image 46.png";
import IMAGE47 from "../../images/image 47.png";
import image39 from "../../images/image39.png";
import vector6 from "../../images/Vector6.png";
import eliipse from "../../images/Ellipse1.png";
import Slick from "../../../src/components/homeComponents/Slick/Slick";
import Slider from "react-slick";

const Others = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={classes.container}>
      <HeadingSection
        mainTitle="Home"
        subTitle="Categories"
        heading="All Categories"
      />
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
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
            <h3>Electrician</h3>
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
            <h3>Salon & Spa</h3>
            <span>36+ Services </span>
          </div>
        </div>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
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
            <h3>Electrician</h3>
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
            <h3>Salon & Spa</h3>
            <span>36+ Services </span>
          </div>
        </div>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
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
            <h3>Electrician</h3>
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
            <h3>Salon & Spa</h3>
            <span>36+ Services </span>
          </div>
        </div>
      </div>
      <div className={classes.heading}>
        <h2>
          Why Our <span>Marketplace?</span>
        </h2>
        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer1}>
        <div className={classes.cardWrap1}>
          <div className={classes.cards}>
            <div className={classes.cards1}>
              <div>
                <img src={service} alt="" />
              </div>
              <h3>Service Commitment </h3>
              <span>
                It is a long established fact a reader will be distracted by the
                readable content of a page when looking at its layout.
              </span>
            </div>
            <div className={classes.cards1}>
              <div>
                <img src={experience} alt="" />
              </div>
              <h3>Super Experience </h3>
              <span>
                It is a long established fact a reader will be distracted by the
                readable content of a page when looking at its layout.
              </span>
            </div>
            <div className={classes.cards1}>
              <div>
                <img src={cloud} alt="" />
              </div>
              <h3> User Data Secure</h3>
              <span>
                It is a long established fact a reader will be distracted by the
                readable content of a page when looking at its layout.
              </span>
            </div>
          </div>
          <div className={classes.cards}>
            <div className={classes.cards1}>
              <div>
                <img src={clock} alt="" />
              </div>
              <h3>Fast Service</h3>
              <span>
                It is a long established fact a reader will be distracted by the
                readable content of a page when looking at its layout.
              </span>
            </div>
            <div className={classes.cards1}>
              <div>
                <img src={payment} alt="" />
              </div>
              <h3>Secure Payment</h3>
              <span>
                It is a long established fact a reader will be distracted by the
                readable content of a page when looking at its layout.
              </span>
            </div>
            <div className={classes.cards1}>
              <div>
                <img src={support} alt="" />
              </div>
              <h3> Dedicated Support </h3>
              <span>
                It is a long established fact a reader will be distracted by the
                readable content of a page when looking at its layout.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes.cardContainer}>
        <div className={classes.cardWrap2}>
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
            <h3>Electrician</h3>
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
            <h3>Salon & Spa</h3>
            <span>36+ Services </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={painting} alt="" />
            </div>
            <h3>Painting </h3>
            <span>36+ Services </span>
          </div>
        </div>
      </div>
      <div className={classes.ellipse}>
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
        <img src={eliipse} alt="" />
      </div> */}
      <Slick />
      <div className={classes.news}>
        <div>
          <Slider {...settings}>
            <div className={classes.newsImg}>
              <img src={IMAGE45} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE46} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE44} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE47} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE44} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE47} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE46} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE45} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE46} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE45} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE47} alt="" />
            </div>
            <div className={classes.newsImg}>
              <img src={IMAGE44} alt="" />
            </div>
          </Slider>
        </div>
      </div>
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

export default Others;
