import { useCounterContext } from "./../../components/hooks/useCounterContext";
import Section1 from "./../../components/servicesComponents/section1/Section1";
import classes from "./ServicesList1.module.css";

const ServicesList1 = () => {
  const { setCurrentSteps } = useCounterContext();

  // const increaseCounter = () => {
  //     dispatch({
  //         type: "INCREASE_COUNT",
  //     });
  // };
  // const decreaseCounter = () => {
  //     dispatch({
  //         type: "DECREASE_COUNT",
  //     });
  // };

  return (
    <div>
      <Section1 />
      <div className={classes.container}>
        <div className={classes.containerWrap}>
          <h2>Avaiable on Feb 2022</h2>
          <div className={classes.dateTimeContainer1}>
            <div className={classes.dateTime}>05 Feb,2022-Fri</div>
            <div className={classes.dateTime}>06 Feb,2022-Sat</div>
            <div className={classes.dateTime}>07 Feb,2022-Sun</div>
            <div className={classes.dateTime}>08 Feb,2022-Mon</div>
            <div className={classes.dateTime}>09 Feb,2022-Tues</div>
          </div>
          <h2> Avaiable schedule on 06 Feb, 2022</h2>
          <div className={classes.dateTimeContainer2}>
            <div className={classes.dateTime}>10.00AM-11.00AM</div>
            <div className={classes.dateTime}>12.00AM-01.00AM</div>
            <div className={classes.dateTime}> 04.00AM-05.00AM</div>
            <div className={classes.dateTime}> 06.00AM-07.00AM</div>
          </div>
          <button>Book Appointment</button>
          <div className={classes.btnContainer}>
            <button onClick={() => setCurrentSteps(1)}>PREVIOUS</button>
            <button onClick={() => setCurrentSteps(3)}>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList1;
