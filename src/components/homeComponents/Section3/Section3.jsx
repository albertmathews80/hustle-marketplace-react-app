import React from "react";
import classes from "./Section3.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import star from "../../../images/Star1.png";
import profile from "../../../images/image2.png";
import eliipse from "../../../images/Ellipse1.png";

const Section3 = () => {
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
          Featured <span>Services</span>
        </h2>
    

        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div>
            {/* <h2> Multiple items </h2> */}
            <Slider {...settings}>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people1} alt="" />
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
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$80.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people3} alt="" />
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
                    <h3> All Emergency Electrical Supports</h3>
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$60.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people2} alt="" />
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
                    <h3>All Hair Cut & Hair Color Service</h3>
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$70.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people3} alt="" />
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
                    <h3> All Emergency Electrical Supports</h3>
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$60.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people2} alt="" />
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
                    <h3>All Hair Cut & Hair Color Service</h3>
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$70.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people1} alt="" />
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
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$80.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people2} alt="" />
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
                    <h3>All Hair Cut & Hair Color Service</h3>
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$70.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people1} alt="" />
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
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$80.00</strong>
                  </div>
                  <button>Book Appointment</button>
                </div>
              </div>
              <div className={classes.cards}>
                <div className={classes.cardImage}>
                  <img src={people3} alt="" />
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
                    <h3> All Emergency Electrical Supports</h3>
                    <p>
                      It is a long established fact a reader will be distracted
                      by thereadable
                    </p>
                  </div>
                  <div className={classes.cardPrice}>
                    <span>Starting at</span>
                    <strong>$60.00</strong>
                  </div>
                  <button>Book Appointment</button>
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

export default Section3;
