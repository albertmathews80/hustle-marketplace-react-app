import React from "react";
import classes from "./ProfileComp.module.css";
import profileBannerImg from "./../../../images/profleBannerImg.png";
import Image13 from "../../../images/image 13.png";

function index({ setShowScreen }) {
  return (
    <div className={classes.container}>
      <img alt="" src={profileBannerImg} className={classes.bgImg} />
      <div className={classes.heading}>
        <h2>Profile Information</h2>
        <button onClick={() => setShowScreen("editprofile")}>
          Edit Profile
        </button>
      </div>
      <div className={classes.formWrap}>
        <div className={classes.image}>
          <img src={Image13} alt="" />
        </div>
        <div className={classes.formContainer}>
          <div className={classes.row}>
            <div className={classes.form_Data}>
              <h6>Name:</h6>
              <h5>John Doe</h5>
            </div>
            <div className={classes.form_Data}>
              <h6>Area:</h6>
              <h5>New York</h5>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.form_Data}>
              <h6>Email:</h6>
              <h5>Customer@gmail.com</h5>
            </div>
            <div className={classes.form_Data}>
              <h6>Post Code:</h6>
              <h5>1122</h5>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.form_Data}>
              <h6>Phone:</h6>
              <h5>011-2234557890</h5>
            </div>
            <div className={classes.form_Data}>
              <h6>Address:</h6>
              <h5>2608 Ritter Avenue Livonia, MI 4815</h5>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.form_Data}>
              <h6>City:</h6>
              <h5>New York</h5>
            </div>
          </div>
          <div className={classes.about_Sec}>
            <h6>About:</h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
