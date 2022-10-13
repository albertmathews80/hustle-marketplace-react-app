import { useCounterContext } from "./../../components/hooks/useCounterContext";
import Section1 from "./../../components/servicesComponents/section1/Section1";
import Section2 from "./../../components/servicesComponents/section2/Section2";
import Section3 from "./../../components/servicesComponents/section3/Section3";
import ServiceList1 from "./../ServiceList1";
import ServiceList2 from "./../ServiceList2";
import ServiceList3 from "./../ServiceList3";
import ServiceList4 from "./../ServiceList4";
import ServiceList5 from "./../ServiceList5";

const ServicesList = () => {
  const { currentSteps } = useCounterContext();

  const showSteps = (steps) => {
    console.log(steps);

    switch (steps) {
      case 0:
        return (
          <>
            <Section1 />
            <Section2 />
            <Section3 />
          </>
        );
      case 1:
        return <ServiceList4 />;
      case 2:
        return <ServiceList1 />;
      case 3:
        return <ServiceList2 />;
      case 4:
        return <ServiceList5 />;
      case 5:
        return <ServiceList3 />;
      default:
        return;
    }
  };

  return <div>{showSteps(currentSteps)}</div>;
};

export default ServicesList;
