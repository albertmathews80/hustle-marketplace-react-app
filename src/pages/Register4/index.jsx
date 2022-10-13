import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCounterContext } from "../../components/hooks/useCounterContext";
import registerSuccess from "../../images/registerSuccess.png";
import classes from "./Index.module.css";

const Register4 = () => {
  const { setRegisterSteps} = useCounterContext();

  return (
    <>
      <div className={classes.success}>
        <img src={registerSuccess} alt="" />
      </div>
      <div className={classes.textAndButton}>
        <h4>Your Seller Account</h4>
        <span>Registration Successfull</span>
        <Link to="/" onClick={() => setRegisterSteps(0)}>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default Register4;
