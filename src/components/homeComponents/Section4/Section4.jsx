import React from "react";
import classes from "./Section4.module.css";
import p1 from "../../../images/ (1).png";
import p2 from "../../../images/ (2).png";
import p3 from "../../../images/ (3).png";
import p4 from "../../../images/ (4).png";
import p5 from "../../../images/ (5).png";
import p6 from "../../../images/people2.png";
import star from "../../../images/Star1.png";
import profile from "../../../images/image2.png";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>
          Popular <span>Services</span>
        </h2>
        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
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
                Book Appointment
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
                <h3> All Emergency Electrical Support</h3>
              </div>
              <div className={classes.cardPriceContainer}>
                <div className={classes.cardPrice}>
                  <span>Starting at</span>
                  <br />
                  <strong>$80.00</strong>
                </div>
              </div>
              <button onClick={() => navigate(`/services/1`)}>
                Book Appointment
              </button>
            </div>
          </div>
          <div className={classes.cards}>
            <div className={classes.cardImage}>
              <img src={p6} alt="" />
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
                <h3> All Hair Cut & Hair Color Service</h3>
              </div>
              <div className={classes.cardPriceContainer}>
                <div className={classes.cardPrice}>
                  <span>Starting at</span>
                  <br />
                  <strong>$80.00</strong>
                </div>
              </div>
              <button onClick={() => navigate(`/services/1`)}>
                Book Appointment
              </button>
            </div>
          </div>
          <div className={classes.cards}>
            <div className={classes.cardImage}>
              <img src={p5} alt="" />
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
                  <strong>$80.00</strong>
                </div>
              </div>
              <button onClick={() => navigate(`/services/1`)}>
                Book Appointment
              </button>
            </div>
          </div>
          <div className={classes.cards}>
            <div className={classes.cardImage}>
              <img src={p4} alt="" />
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
                <h3> Home & All Others Cleaning Service</h3>
              </div>
              <div className={classes.cardPriceContainer}>
                <div className={classes.cardPrice}>
                  <span>Starting at</span>
                  <br />
                  <strong>$80.00</strong>
                </div>
              </div>
              <button onClick={() => navigate(`/services/1`)}>
                Book Appointment
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
                Book Appointment
              </button>
            </div>
          </div>
        </div>
        <center>
          <button>Explore More</button>
        </center>
      </div>
    </div>
  );
};

export default Section4;
