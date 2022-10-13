import React from "react";
import classes from "./Section7.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../../../images/ (5).png";
import p2 from "../../../images/ (4).png";
import p3 from "../../../images/ (1).png";
import star from "../../../images/Star1.png";
import logo from "../../../images/Hustle final logo black 2.png";
import profile from "../../../images/image2.png";
import eliipse from "../../../images/Ellipse1.png";
import { useNavigate } from "react-router-dom";

const Section7 = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>
          Recent <span>Blog & Articles</span>
        </h2>
        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div>
            <Slider {...settings}>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p1} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3>All Painting & Renovation Service</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$80.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p2} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3> House Moving & Shifting Services</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$75.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p3} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3>Home & All Others Cleaning Service</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$90.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p3} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3>Home & All Others Cleaning Service</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$90.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p1} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3>All Painting & Renovation Service</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$80.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p2} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3> House Moving & Shifting Services</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$75.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p2} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3> House Moving & Shifting Services</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$75.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p3} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3>Home & All Others Cleaning Service</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$90.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={p1} alt="" />
                </div>
                <div className={classes.cardInfo}>
                  <div className={classes.cardProfile}>
                    <div className={classes.cardProfileInner}>
                      <img src={profile} alt="" />
                      <span>Ryad Hussain</span>
                    </div>
                    <div className={classes.star}>
                      <img src={star} alt="" />
                      <span>4.9 (231)</span>
                    </div>
                  </div>
                  <div className={classes.cardHeading}>
                    <h3>All Painting & Renovation Service</h3>
                  </div>
                  <div className={classes.cardPriceContainer}>
                    <div className={classes.cardPrice}>
                      <span>Starting at</span>
                      <br />
                      <strong>$80.00</strong>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/services/1`)}>
                    Book Now
                  </button>
                </div>
              </div>
            </Slider>
          </div>
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

export default Section7;
