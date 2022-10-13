import Form from "./../../components/form/Form";
import { useCounterContext } from "./../../components/hooks/useCounterContext";
import Section1 from "./../../components/servicesComponents/section1/Section1";
import classes from "./ServiceList2.module.css";

const ServiceList2 = () => {
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
    <div className={classes.container}>
      <div className={classes.containerWrap}>
        <Section1 />
        <Form />
        <div className={classes.btnContainer}>
          <button onClick={() => setCurrentSteps(2)}>PREVIOUS</button>
          <button onClick={() => setCurrentSteps(4)}>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceList2;
