import { useState } from "react";
import classes from "./Verification.module.css";

const Verification = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp({ otp });
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h1>Account Verification</h1>
        <p>Enter 6 digit code that you receive in your email</p>
        <div className={classes.otpInput}>
          {/* <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            className={classes.Input}
          /> */}
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Verification;
