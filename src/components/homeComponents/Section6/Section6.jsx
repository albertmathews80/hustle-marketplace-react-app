import React from "react";
import classes from "./Section6.module.css";
import image39 from "../../../images/image39.png";
import vector6 from "../../../images/Vector6.png";

const Section6 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.Wrap}>
        <div className={classes.textContainer}>
          <h2>
            Start as a <span>Seller</span>
          </h2>
          <p>
            It is a long established fact a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
          <div className={classes.list}>
            <img src={vector6} alt="" />
            <span>
              {" "}
              It is a long established fact a reader will be distracted by the
              readable content of a page.
            </span>
          </div>
          <div className={classes.list}>
            <img src={vector6} alt="" />
            <span>
              {" "}
              It is a long established fact a reader will be distracted by the
              readable content of a page.
            </span>
          </div>
          <button>Become A Seller</button>
        </div>
        <div className={classes.imageContainer}>
          <img src={image39} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
