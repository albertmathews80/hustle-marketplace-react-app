import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const homeNavigator = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.image}></div>
      <div className={classes.text}>Page Not Found</div>
      <button className={classes.button} onClick={homeNavigator}>
        {" "}
        <span className={classes.btnText}> Back to Home</span>
      </button>
    </div>
  );
};

export default NotFound;
