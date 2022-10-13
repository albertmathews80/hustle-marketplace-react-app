import classes from "./ServiceComp.module.css";
import AllServices from "../AllServices/index";
import EditServices from "../EditServices/index";
import EditServices2 from "../EditServices2/index";
import { useState } from "react";

function ServicesComp() {
  const [selectService, setSelectService] = useState("editservices");
  return (
    <div className={classes.container}>
      {selectService === "allservices" && <AllServices />}
      {selectService === "editservices" && <EditServices />}
      {selectService === "editservices2" && <EditServices2 />}
    </div>
  );
}

export default ServicesComp;
