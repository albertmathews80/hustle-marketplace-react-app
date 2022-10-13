import { Link } from "react-router-dom";
import { useCounterContext } from "./../../components/hooks/useCounterContext";
import Section1 from "./../../components/servicesComponents/section1/Section1";
import success from "./../../images/Vector9.png";
import classes from "./ServiceList3.module.css";

const ServiceList3 = () => {
  const { setCurrentSteps } = useCounterContext();

  return (
    <div className={classes.container}>
      <div className={classes.containerWrap}>
        <Section1 />
        <center>
          <h1>SUCCESS!</h1>
          <img src={success} alt="" />
          <p>You Have Successfully Signed Up</p>
          <Link to="/">
            <button onClick={() => setCurrentSteps(0)}>Back To Home</button>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default ServiceList3;
