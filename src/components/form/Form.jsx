import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.container}>
      <h2>Booking Information</h2>
      <form>
        <div className={classes.flex}>
          <div>
            <label>Your Name*</label>
            <br />
            <input type="text" placeholder="Type Your Name" />
          </div>
          <div>
            <label>Your Email*</label>
            <br />
            <input type="text" placeholder=" Type Your Email" />
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <label>Phone Number*</label>
            <br />
            <input type="text" placeholder="Type Your Number" />
          </div>
          <div>
            <label>Your City*</label>
            <br />
            <select name="" id="">
              {" "}
              <option value="">New York</option>
            </select>
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <label>Your Area*</label>
            <br />
            <input type="text" placeholder="Type Your Area" />
          </div>
          {/* <div><label>Post Code*</label><br/><input type="text" placeholder='Type Post Code' /></div>  */}
          <div>
            <label>Your Address*</label>
            <br />
            <input type="text" placeholder="Type Your Address" />
          </div>
        </div>
        {/* <div>
          <label>Your Address*</label>
          <br />
          <input type="text" placeholder="Type Your Address" />
        </div> */}
        <div>
          <label>Order Note*</label>
          <br />
          <textarea rows={5} placeholder="Type Order Note" />
        </div>
        {/* <button>Continue</button> */}
      </form>
    </div>
  );
};

export default Form;
