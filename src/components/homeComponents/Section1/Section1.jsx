import React from "react";
import classes from "./Section1.module.css";
import vector4 from "../../../images/Vector4.png";
import vector2 from "../../../images/Vector2.png";

const Section1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <p> Order any service, anytime from anywhere </p>
        <h1>
          ONE-STOP SOLUTION <br />
          FOR YOUR SERVICES
        </h1>
        <div className={classes.searchContainer}>
          <div className={classes.selectBtn}>
            <span>New York</span>
            <img src={vector4} alt="" />
          </div>
          <div className={classes.searchBar}>
            <input type="text" placeholder="What are you looking for" />
            <span>
              <img src={vector2} alt="" />
            </span>
          </div>
        </div>
        <div className={classes.btnCollection}>
          <span>Popular:</span>
          <button>Electrician</button>
          <button> Cleaner</button>
          <button>Painting</button>
          <button>Salon</button>
          <button>Home Move</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
