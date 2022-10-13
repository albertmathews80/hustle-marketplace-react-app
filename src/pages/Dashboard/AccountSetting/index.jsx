import React from "react";
import classes from "../AccountSetting/Account.module.css";
const index = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h2>Account Setting</h2>
        <button>View Services</button>
      </div>
      <div className={classes.cardContainer}>
        <div>
          <h4>Change Password</h4>
          <div className={classes.title}>
            <p>Current Password*</p>
            <input type="text" placeholder="Current Password" />
            <p>New Password*</p>
            <input
              type="text"
              name="Add title"
              id=""
              placeholder="New Password"
            />
            <p>Re-Type Password*</p>
            <input
              type="text"
              name="Add title"
              id=""
              placeholder="New Password"
            />
            <button>Update Password</button>
          </div>
        </div>
        <div>
          <h4>Deactivate Account</h4>
          <form>
            <div>
              <p>Choose reason*</p>
              <select name="" id="">
                <option value="">choose Reason</option>
              </select>
            </div>
          </form>
          <p>Add Description*</p>
          <textarea
            name="Type Description"
            id=""
            cols="30"
            rows="10"
            placeholder="Describe Your Reason"
          ></textarea>
          <button>Deactivate Account</button>
        </div>
      </div>

      {/* <div className={classes.cardContainer}>
        <form>
          <div>
            <p>Current Password*</p>
            
            <input type="text" placeholder="Current Password" />
          </div>
          <div>
            <p>Choose reason*</p>
            <select name="" id="">
              <option value="">choose Reason</option>
            </select>
          </div>
        </form>
      </div>
      <div className={classes.main}>
        <div className={classes.title}>
          <div>
            <p>New Password*</p>
            <input
              type="text"
              name="Add title"
              id=""
              placeholder="New Password"
            />
            <p>Re-Type Password*</p>
            <input
              type="text"
              name="Add title"
              id=""
              placeholder="New Password"
            />
          </div>
          <button>Update Password</button>
        </div>
        <div className={classes.description}>
          <p>Add Description*</p>
          <textarea
            name="Type Description"
            id=""
            cols="30"
            rows="10"
            placeholder="Describe Your Reason"
          ></textarea>
          <button>Deactivate Account</button>
        </div>
      </div> */}
    </div>
  );
};

export default index;
