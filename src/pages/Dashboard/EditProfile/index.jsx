import React from "react";
import classes from "./EditProfile.module.css";
import Image13 from "../../../images/image 13.png";
const index = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>Edit Profile</h2>
        <button>View Services</button>
      </div>
      <div className={classes.formWrap}>
        <div className={classes.image}>
          <img src={Image13} alt="" />
        </div>

        <div className={classes.formContainer}>
          <div className={classes.row}>
            <div>
              <p>Your Name*</p>
              <input type="text" placeholder="Type Your Name" />
            </div>
            <div>
              <p>Your Email*</p>
              <input type="text" placeholder="Type your Email" />
            </div>
          </div>
          <div className={classes.row}>
            <div>
              <p>Phone Number*</p>
              <input type="text" placeholder="Type Your Number" />
            </div>
            <form>
              <div>
                <p>Choose reason*</p>
                <select name="" id="">
                  <option value="">choose Reason</option>
                </select>
              </div>
            </form>
          </div>
          <div className={classes.row}>
            <div>
              <p>Your Area*</p>
              <input type="text" placeholder="Type Your Name" />
            </div>
            <div>
              <p>Post Code*</p>
              <input type="text" placeholder="Type your Email" />
            </div>
          </div>
          <div>
            <p>Your Address*</p>
            <input type="text" placeholder="Type your Email" />
          </div>
          <div>
            <p>About*</p>
            <textarea
              name="about"
              id=""
              cols="30"
              rows="10"
              placeholder="Type Note"
            ></textarea>
          </div>
          <button>Save Changes</button>
        </div>

        {/* <div className={classes.cardContainer}>
          <div>
            <div className={classes.title}>
              <p>Your Name*</p>
              <input type="text" placeholder="Type Your Name" />

              <p>Phone Number*</p>
              <input
                type="text"
                name="Add title"
                id=""
                placeholder="Type Your Number"
              />
            </div>
          </div>*/}
      </div>
      {/* </div> */}
      {/*  <div className={classes.title}>
          <p>Your Name*</p>
          <input type="text" placeholder="Type your Name" />
          <p>Your Email*</p>
          <input type="text" placeholder="Type your Email" />
        </div>
        <p>Phone Number*</p>
        <input type="digit" placeholder="Type your Number" />
        <p>Your Area*</p>
        <input type="text" placeholder="Type your Area" />
        <p>Type Your Area*</p>
        <input type="text" placeholder="Type Post Code" />
      </div> 
      
      
         <p>Your Email*</p>
              <input
                type="text"
                name="Add title"
                id=""
                placeholder="Type Your Email"
              />
      

              <form>
                <div>
                  <p>Choose reason*</p>
                  <select name="" id="">
                    <option value="">choose Reason</option>
                  </select>
                </div>
              </form>
      
      */}
    </div>
  );
};

export default index;
