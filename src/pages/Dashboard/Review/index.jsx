import React from "react";
import classes from "./Review.module.css";
import image9 from "../../../images/image 9.png";
import star from "../../../images/Star 9.png";

function index() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>Customer Reviews</h2>
        <p>Showing 10 of 50</p>
      </div>
      <div className={classes.sub}>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
      </div>
      <div className={classes.sub}>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
      </div>
      <div className={classes.sub}>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
      </div>
      <div className={classes.sub}>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
        <div className={classes.review}>
          <img src={image9} alt="" />
          <div className={classes.text}>
            <h5>John Cena</h5>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>
              It is a long established fact a reader will be distracted by
              thereadableIt is along established fact a reader will be
              distracted by there a bleIt is a long established fact a reader
              will be distracted by thereadable It is a long estab
            </p>
            <p>Feb 15, 2022</p>
          </div>
        </div>
      </div>
      <div className={classes.pagination}>
        <button>&lt;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default index;
