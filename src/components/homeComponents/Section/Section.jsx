import Navbar from "../../Navbar/Navbar";
import Section1 from "../Section1/Section1";
import classes from "./Section.module.css";
import { useLocation } from "react-router-dom";
import whiteLogo from "../../../images/Hustlefinallogowhite1.png";
import whiteRing from "../../../images/Vector3.png";

const Section = () => {
  const location = useLocation();

  return (
    <div className={classes.container}>
      {location.pathname === "/" && (
        <Navbar logo={whiteLogo} ring={whiteRing} />
      )}
      <Section1 />
    </div>
  );
};

export default Section;
