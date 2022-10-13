import React from "react";
import classes from "./Section5.module.css";
import service from "../../../images/customer-support2.png";
import experience from "../../../images/experience2.png";
import cloud from "../../../images/cloud2.png";
import clock from "../../../images/wall-clock2.png";
import payment from "../../../images/credit-card2.png";
import support from "../../../images/support2.png";

const Section5 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>
          Why Our <span>Marketplace?</span>
        </h2>
        <p>
          It is a long established fact a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div className={classes.cards}>
            <div>
              <img src={service} alt="" />
            </div>
            <h3>Service Commitment </h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={experience} alt="" />
            </div>
            <h3>Super Experience </h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={cloud} alt="" />
            </div>
            <h3> User Data Secure</h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={clock} alt="" />
            </div>
            <h3>Fast Service</h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
            <div>
              <img src={payment} alt="" />
            </div>
            <h3>Secure Payment</h3>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div className={classes.cards}>
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
  );
};

export default Section5;
